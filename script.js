// getting the elements
const startForm = document.getElementById("start-form");
const startSection = document.getElementById("start-section");
const gameBoard = document.querySelector(".game-board");
const gameInfo = document.querySelector(".game-info");
const welcomeMessage = document.getElementById("welcome-message");

const movesEl = document.getElementById("moves");
const missesEl = document.getElementById("misses");
const scoreEl = document.getElementById("score");

// global variables for moves/misses/score
let moves = 0;
let misses = 0;
let score = 100;

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