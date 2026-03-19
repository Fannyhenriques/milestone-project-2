// getting the elements
const startForm = document.getElementById("start-form");
const startSection = document.getElementById("start-section");
const gameBoard = document.querySelector(".game-board");
const gameInfo = document.querySelector(".game-info");
const welcomeMessage = document.getElementById("welcome-message");

const movesEl = document.getElementById("moves");
const missesEl = document.getElementById("misses");
const scoreEl = document.getElementById("score");
const endScreen = document.getElementById("end-screen");
const endMessage = document.getElementById("end-message");
const finalScore = document.getElementById("final-score");
const finalMoves = document.getElementById("final-moves");
const finalMisses = document.getElementById("final-misses");
const playAgainBtn = document.getElementById("play-again-btn");
const newGameBtn = document.getElementById("new-game-btn");

// global variables
let moves = 0;
let misses = 0;
let score = 100;

let firstCard = null;
let secondCard = null;
let lockBoard = false; //lock board, should not be able to pick more than two cards

let cards = [];

let matches = 0;


// fetching name before starting the game
startForm.addEventListener("submit", (e) => {
	e.preventDefault(); //preventing page reload

	const playerName = document.getElementById("player-name").value.trim();

	if (playerName.length < 2) return;

	startGame(playerName);
});

// function for handeling UI and start game
function startGame(name) {
	// hide the start-section
	startSection.classList.add("hidden");

	// fetch game and scoreboard  
	gameBoard.classList.remove("hidden");
	gameInfo.classList.remove("hidden");
	welcomeMessage.classList.remove("hidden");

	welcomeMessage.innerText = `Welcome ${name}!`;

	resetGameData();

	const shuffledCards = shuffleCards(cards);
	renderGameBoard(shuffledCards);
};

// resets the scoreboard
function resetGameData() {
	moves = 0;
	misses = 0;
	score = 100;
	matches = 0;

	movesEl.innerText = moves;
	missesEl.innerText = misses;
	scoreEl.innerText = score;
};

//fetching cards from jsonfile 
fetch("assets/data/cards.json")
	.then((res) => res.json())
	.then((data) => {
		cards = data;
		console.log("Cards loaded:", cards);
	})
	.catch((err) => console.error("Failed to load cards:", err));

function shuffleCards(cardArray) {
	const doubled = [...cardArray, ...cardArray]; // create pairs for cards
	//sort the array of cards, shuffles order - maybe change later to something better?
	return doubled.sort(() => Math.random() - 0.5);
};

function renderGameBoard(cardsArray) {
	gameBoard.innerHTML = "";

	cardsArray.forEach(card => {
		const cardElement = document.createElement("div");
		cardElement.classList.add("card");
		cardElement.dataset.name = card.name;

		const cardInner = document.createElement("div");
		cardInner.classList.add("card-inner");

		const cardFront = document.createElement("div");
		cardFront.classList.add("card-front");
		cardFront.innerText = "";

		const cardBack = document.createElement("div");
		cardBack.classList.add("card-back");
		const img = document.createElement("img");
		img.src = card.icon;
		img.alt = card.name;
		cardBack.appendChild(img);

		cardInner.appendChild(cardFront);
		cardInner.appendChild(cardBack);
		cardElement.appendChild(cardInner);
		gameBoard.appendChild(cardElement);

		cardElement.addEventListener("click", () => flipCard(cardElement));
	});
}

function flipCard(card) {
	if (lockBoard || card.classList.contains("flipped")) return;
	// if board is locked or if card is flipped, do nothing, otherwise trigger flip card animation:
	card.classList.add("flipped");

	if (!firstCard) {
		firstCard = card;
		return;
	}

	secondCard = card;
	moves++;
	movesEl.innerText = moves;

	checkMatch();
};

//check if cards are matching
function checkMatch() {
	const isMatch = firstCard.dataset.name === secondCard.dataset.name;

	if (isMatch) {
		matches++;

		firstCard.removeEventListener("click", flipCard);
		secondCard.removeEventListener("click", flipCard);

		resetFlippedCards();

		if (matches === cards.length) {
			setTimeout(endGame, 500);
		}

	} else {
		misses++;
		score -= 5;
		missesEl.innerText = misses;
		scoreEl.innerText = score;

		lockBoard = true;
		setTimeout(() => {
			firstCard.classList.remove("flipped");
			secondCard.classList.remove("flipped");
			resetFlippedCards();
		}, 1000);
	}
}

// helper function to reset selected cards and unlock board
function resetFlippedCards() {
	[firstCard, secondCard] = [null, null];
	lockBoard = false;
}

function endGame() {
	gameBoard.classList.add("hidden");
	gameInfo.classList.add("hidden");
	welcomeMessage.classList.add("hidden");

	endScreen.classList.remove("hidden");

	endMessage.innerText = `🎉 Well done ${playerName}! 🎉`;

	finalScore.innerText = `You scored: ${score}`;
	finalMoves.innerText = `Your total moves: ${moves}`;
	finalMisses.innerText = `Your misses: ${misses}`;
}

function restartGame() {

	endScreen.classList.add("hidden");

	gameBoard.classList.remove("hidden");
	gameInfo.classList.remove("hidden");
	welcomeMessage.classList.remove("hidden");

	resetGameData();

	const shuffledCards = shuffleCards(cards);
	renderGameBoard(shuffledCards);
}

playAgainBtn.addEventListener("click", restartGame);

