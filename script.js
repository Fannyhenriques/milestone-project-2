// getting the elements
const startForm = document.getElementById("start-form");
const startSection = document.getElementById("start-section");
const gameBoard = document.querySelector(".game-board");
const gameInfo = document.querySelector(".game-info");
const welcomeMessage = document.getElementById("welcome-message");

const movesEl = document.getElementById("moves");
const missesEl = document.getElementById("misses");
const scoreEl = document.getElementById("score");

// global variables
let moves = 0;
let misses = 0;
let score = 100;

let firstCard = null;
let secondCard = null;
let lockBoard = false; //lock board, should not be able to pick more than two cards

let cards = [];


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
}

// resets the scoreboard
function resetGameData() {
	moves = 0;
	misses = 0;
	score = 100;

	movesEl.innerText = moves;
	missesEl.innerText = misses;
	scoreEl.innerText = score;
}

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
}
