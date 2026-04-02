// getting the elements
const startForm = document.getElementById("start-form");
const startSection = document.getElementById("start-section");
const gameBoard = document.querySelector(".game-board");
const gameInfo = document.querySelector(".game-info");
const welcomeMessage = document.getElementById("welcome-message");

const movesEl = document.getElementById("moves");
const missesEl = document.getElementById("misses");
const scoreEl = document.getElementById("score");

//element för end message
const endScreen = document.getElementById("end-screen");
const endMessage = document.getElementById("end-message");
const finalScore = document.getElementById("final-score");
const finalMoves = document.getElementById("final-moves");
const finalMisses = document.getElementById("final-misses");
const playAgainBtn = document.getElementById("play-again-btn");
const newGameBtn = document.getElementById("new-game-btn");

//popup
const rulesBtn = document.getElementById("rules-btn");
const rulesModal = document.getElementById("rules-modal");
const closeRulesBtn = document.getElementById("close-rules-btn");

// 1. GLOBAL VARIABLES / STATE
let playerName = "";

let moves = 0;
let misses = 0;
let score = 100;

let firstCard = null;
let secondCard = null;
let lockBoard = false; //lock board, should not be able to pick more than two cards

let cards = [];

let matches = 0;


// EVENT LISTENERS


// fetching name before starting the game
startForm.addEventListener("submit", (e) => {
	e.preventDefault(); //preventing page reload

	const playerName = document.getElementById("player-name").value.trim();

	if (playerName.length < 2) return;

	startGame(playerName);
});

// function for handeling UI and start game
function startGame(name) {
	playerName = name;
	// hide the start-section
	startSection.classList.add("hidden");

	// fetch game and scoreboard  
	gameBoard.classList.remove("hidden");
	gameInfo.classList.remove("hidden");
	welcomeMessage.classList.remove("hidden");

	welcomeMessage.innerText = `Lets go ${name}!`;

	resetGameData();

	const shuffledCards = shuffleCards(cards);
	renderGameBoard(shuffledCards);
}

// resets the scoreboard
function resetGameData() {
	moves = 0;
	misses = 0;
	score = 100;
	matches = 0;

	movesEl.innerText = moves;
	missesEl.innerText = misses;
	scoreEl.innerText = score;

	updateScoreUI();
}

//fetching cards from jsonfile 
fetch("assets/data/cards.json")
	.then((res) => {
		if (!res.ok) {
			throw new Error("404 or server error");
		}
		return res.json();
	})
	.then((data) => {
		cards = data;
	})
	.catch((err) => {
		console.error("Failed to load cards:", err);
		gameBoard.innerText = "Something went wrong. Please try again later.";
	});

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
}

//check if cards are matching
function checkMatch() {
	const isMatch = firstCard.dataset.name === secondCard.dataset.name;

	if (isMatch) {
		matches++;

		const card1 = firstCard;
		const card2 = secondCard;

		setTimeout(() => {
			card1.classList.add("matched");
			card2.classList.add("matched");
		}, 500);

		resetFlippedCards();

		if (matches === cards.length) {
			setTimeout(() => endGame(true), 500);
		}

	} else {
		misses++;
		score -= 5;
		missesEl.innerText = misses;

		updateScoreUI();

		if (score <= 0) {
			score = 0;
			endGame(false);
		}

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

function endGame(isWin = true) {
	setTimeout(() => {
		gameBoard.classList.add("hidden");
		gameInfo.classList.add("hidden");
		welcomeMessage.classList.add("hidden");

		endScreen.classList.remove("hidden");

		if (isWin) {
			endMessage.innerText = `🎉 Well done ${playerName}! 🎉`;
			finalScore.innerText = `You scored: ${score}`;
			finalMoves.innerText = `Your total moves: ${moves}`;
			finalMisses.innerText = `Your misses: ${misses}`;
			createConfettiBurst();
		} else {
			endMessage.innerText = `😢 Oh no ${playerName}! You ran out of points. Try again!`;
			createRainFail();
			document.body.classList.add("fail-background");

			finalScore.innerText = ""; //this fixed bug where prev points where added to "lose-message"
			finalMoves.innerText = "";
			finalMisses.innerText = "";
		}
	}, 1000);
}

function restartGame() {

	endScreen.classList.add("hidden");

	gameBoard.classList.remove("hidden");
	gameInfo.classList.remove("hidden");
	welcomeMessage.classList.remove("hidden");

	document.body.classList.remove("fail-background");

	resetGameData();

	const shuffledCards = shuffleCards(cards);
	renderGameBoard(shuffledCards);
}

playAgainBtn.addEventListener("click", restartGame);

function newGame() {

	endScreen.classList.add("hidden");
	gameBoard.classList.add("hidden");
	gameInfo.classList.add("hidden");
	welcomeMessage.classList.add("hidden");

	startSection.classList.remove("hidden");
	document.body.classList.remove("fail-background");

	document.getElementById("player-name").value = "";

	resetGameData();
}

newGameBtn.addEventListener("click", newGame);

rulesBtn.addEventListener("click", () => {
	rulesModal.classList.remove("hidden");
});

closeRulesBtn.addEventListener("click", () => {
	rulesModal.classList.add("hidden");
	console.log("clicked")
});

rulesModal.addEventListener("click", (e) => {
	if (e.target === rulesModal) {
		rulesModal.classList.add("hidden");
	}
});

function createConfettiBurst() {
	for (let i = 0; i < 60; i++) {
		const confetti = document.createElement("div");
		confetti.classList.add("confetti");

		// färger
		const colors = ["#f12ec0", "#116179", "#ffcc00", "#4caf50"];
		confetti.style.backgroundColor =
			colors[Math.floor(Math.random() * colors.length)];

		const x = (Math.random() - 0.5) * 600 + "px";
		const y = (Math.random() - 0.5) * 600 + "px";

		confetti.style.setProperty("--x", x);
		confetti.style.setProperty("--y", y);

		// animation
		confetti.style.animation = "burst 0.8s ease-out forwards";

		document.body.appendChild(confetti);

		setTimeout(() => {
			confetti.remove();
		}, 800);
	}
}

function createRainFail() {
	const numberOfDrops = 100;
	for (let i = 0; i < numberOfDrops; i++) {
		const drop = document.createElement("div");
		drop.classList.add("rain-drop");
		drop.style.left = Math.random() * window.innerWidth + "px";

		drop.style.animationDuration = 1.5 + Math.random() * 1.5 + "s";

		drop.style.animationDelay = Math.random() * 1.5 + "s";
		drop.style.width = 2 + Math.random() * 4 + "px";
		drop.style.height = 15 + Math.random() * 15 + "px";

		document.body.appendChild(drop);

		setTimeout(() => drop.remove(), 4000);
	}
}

function updateScoreUI() {
	scoreEl.innerText = score;

	scoreEl.classList.remove("low-score", "medium-score", "moderate-score");

	if (score < 30) {
		scoreEl.classList.add("low-score");
	} else if (score < 50) {
		scoreEl.classList.add("medium-score");
	} else if (score < 70) {
		scoreEl.classList.add("moderate-score");
	}
}
