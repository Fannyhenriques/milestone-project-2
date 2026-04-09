// =======================
//        DOM ELEMENTS
// =======================
const startForm = document.getElementById("start-form");
const startSection = document.getElementById("start-section");
const gameBoard = document.querySelector(".game-board");
const gameInfo = document.querySelector(".game-info");
const formError = document.getElementById("form-error");

const movesEl = document.getElementById("moves");
const missesEl = document.getElementById("misses");
const scoreEl = document.getElementById("score");

// ELEMENTS FOR END SCREEN
const endScreen = document.getElementById("end-screen");
const endMessage = document.getElementById("end-message");
const finalScore = document.getElementById("final-score");
const finalMoves = document.getElementById("final-moves");
const finalMisses = document.getElementById("final-misses");
const playAgainBtn = document.getElementById("play-again-btn");
const newGameBtn = document.getElementById("new-game-btn");

// POPUPS
const rulesBtn = document.getElementById("rules-btn");
const rulesModal = document.getElementById("rules-modal");
const logoBtn = document.getElementById("logo-btn");
const gameInfoModal = document.getElementById("game-info-modal");


// =======================
// GLOBAL VARIABLES / STATE
// =======================
let playerName = "";

let moves = 0;
let misses = 0;
let score = 100;

let firstCard = null;
let secondCard = null;
let lockBoard = false;

let cards = [];

let matches = 0;

// =======================
//   MAIN GAME FLOW FUNCTIONS
// =======================

// 1. Start game
// hide start screen, reset data, shuffle cards, render board
const startGame = (name) => {
	playerName = name;
	// hide the start-section
	startSection.classList.add("hidden");
	// show game board and info
	gameBoard.classList.remove("hidden");
	gameInfo.classList.remove("hidden");
	welcomeMessage.classList.remove("hidden");
	welcomeMessage.innerText = `Lets go ${name}!`;
	// reset moves, misses, score
	resetGameData();
	// shuffle cards
	const shuffledCards = shuffleCards(cards);
	//render board
	renderGameBoard(shuffledCards);
}

// 2. Reset scoreboard / game state
// Resets all game stats (moves, misses, score, matches) and updates the UI
const resetGameData = () => {
	// reset variables
	moves = 0;
	misses = 0;
	score = 100;
	matches = 0;

	// update UI elements
	movesEl.innerText = moves;
	missesEl.innerText = misses;
	scoreEl.innerText = score;

	// update score color based on current score
	updateScoreUI();
}

// 3. Render game board
// Creates the card elements for the board, sets front/back, and adds click listeners
const renderGameBoard = (cardsArray) => {
	// clear existing board
	gameBoard.innerHTML = "";

	// create card elements for each card in the array
	cardsArray.forEach(card => {
		const cardElement = document.createElement("div");
		cardElement.classList.add("card");
		cardElement.dataset.name = card.name; // store card name for matching

		// inner wrapper for front/back
		const cardInner = document.createElement("div");
		cardInner.classList.add("card-inner");

		// front side of the card
		const cardFront = document.createElement("div");
		cardFront.classList.add("card-front");
		cardFront.innerText = "";

		// back side of the card
		const cardBack = document.createElement("div");
		cardBack.classList.add("card-back");
		const img = document.createElement("img");
		img.src = card.icon;
		img.alt = card.name;
		cardBack.appendChild(img);

		// assemble card
		cardInner.appendChild(cardFront);
		cardInner.appendChild(cardBack);
		cardElement.appendChild(cardInner);
		gameBoard.appendChild(cardElement);

		// add click listener to handle card flip
		cardElement.addEventListener("click", handleCardClick);
	});
}

// 4. Flip the cards
// Handles flipping a card, updating moves, and checking for matches
const flipCard = (card) => {
	// ignore click if board is locked or card is already flipped... 
	if (lockBoard || card.classList.contains("flipped")) return;
	// ...otherwise; trigger flip card animation
	card.classList.add("flipped");

	// if no first card is selected, mark this card as firstCard
	if (!firstCard) {
		firstCard = card;
		return; // wait for second card
	}
	// if firstCard is already selected, mark this as secondCard
	secondCard = card;
	// increment moves and update the UI
	moves++;
	movesEl.innerText = moves;
	// check if the two selected cards match
	checkMatch();
}

// 5. Check if two flipped cards match
// Compares firstCard and secondCard, updates matches/misses/score, and handles win/lose logic
const checkMatch = () => {
	// check if the two selected cards have the same name
	const isMatch = firstCard.dataset.name === secondCard.dataset.name;

	if (isMatch) {
		// increment number of matches
		matches++;

		const card1 = firstCard;
		const card2 = secondCard;

		// visually mark the cards as matched after a short delay
		setTimeout(() => {
			card1.classList.add("matched");
			card2.classList.add("matched");
		}, 500);

		// reset firstCard and secondCard to allow new selections
		resetFlippedCards();

		// if all cards are matched, end the game with a win
		if (matches === cards.length) {
			setTimeout(() => endGame(true), 500);
		}

	} else {
		// if cards do not match, increment misses and reduce score
		misses++;
		score -= 5;
		missesEl.innerText = misses;

		// update the score color in UI
		updateScoreUI();

		// if score drops to 0 or below, end game with a loss
		if (score <= 0) {
			score = 0;
			endGame(false);
		}

		// temporarily lock the board while flipping back unmatched cards
		lockBoard = true;
		// flip the unmatched cards back after a short delay
		setTimeout(() => {
			firstCard.classList.remove("flipped");
			secondCard.classList.remove("flipped");
			resetFlippedCards();
		}, 1000);
	}
}

// 6. End game (win or lose)
// Handles showing the end screen, updating final stats, and triggering visual effects
const endGame = (isWin = true) => {
	setTimeout(() => {
		// hide the game board and game info
		gameBoard.classList.add("hidden");
		gameInfo.classList.add("hidden");
		welcomeMessage.classList.add("hidden");
		// show the end screen
		endScreen.classList.remove("hidden");

		if (isWin) {
			// WIN CASE
			endMessage.innerText = `🎉 Well done ${playerName}! 🎉`;
			finalScore.innerText = `You scored: ${score}`;
			finalMoves.innerText = `Your total moves: ${moves}`;
			finalMisses.innerText = `Your misses: ${misses}`;
			// show confetti animation for win
			createConfettiBurst();
		} else {
			// LOSE CASE
			endMessage.innerText = `😢 Oh no ${playerName}! You ran out of points. Try again!`;
			// show rain animation for losing
			createRainFail();
			// add a gray background effect to indicate failure
			document.body.classList.add("fail-background");
			// clear previous game stats to avoid showing old data
			finalScore.innerText = ""; //this fixed bug where prev points where added to "lose-message"
			finalMoves.innerText = "";
			finalMisses.innerText = "";
		}
	}, 1000); // short delay to allow last card flip animation to complete
}

// 7. Restart / play again
// Resets the game after a win or loss so the player can play again without going back to start
const restartGame = () => {

	// hide end screen and show game elements again
	endScreen.classList.add("hidden");
	gameBoard.classList.remove("hidden");
	gameInfo.classList.remove("hidden");
	welcomeMessage.classList.remove("hidden");

	// remove failure background in case the last game was lost
	document.body.classList.remove("fail-background");

	// reset game stats (moves, misses, score, matches)
	resetGameData();

	// shuffle cards and render the game board again
	const shuffledCards = shuffleCards(cards);
	renderGameBoard(shuffledCards);
}

// 8. New game (back to start)
// Resets everything and brings the player back to the start screen to enter a new name
const newGame = () => {

	// hide game and end screens
	endScreen.classList.add("hidden");
	gameBoard.classList.add("hidden");
	gameInfo.classList.add("hidden");
	welcomeMessage.classList.add("hidden");

	// show start section for entering a new player name
	startSection.classList.remove("hidden");
	// remove gray fail background if it was added in the last game
	document.body.classList.remove("fail-background");

	// clear input field for player name
	document.getElementById("player-name").value = "";

	// reset game stats (moves, misses, score, matches)
	resetGameData();
}

// =======================
//      HELPER FUNCTIONS
// =======================

// Handle card click (used by renderGameBoard)
// Triggered when a card on the board is clicked
// Calls flipCard to handle flipping and matching logic
const handleCardClick = (e) => {
	const card = e.currentTarget; // get the clicked card
	flipCard(card); // flip it and handle match checking
};


// Restores flipped cards (firstCard and secondCard)
// Clears the currently selected cards and unlocks the board
// Used after checking a match or mismatch
const resetFlippedCards = () => {
	[firstCard, secondCard] = [null, null]; // clear selected cards
	lockBoard = false; // allow clicking new cards
}


// Shuffling the array of cards  
// Splits the card array into two halves, shuffles each half, mixes them, and applies safe swaps
// Returns a shuffled array where matching pairs are not adjacent
const shuffleCards = (cardArray) => {
	// Step 1: Split deck into two halves to separate matching pairs
	const halfA = [...cardArray];
	const halfB = [...cardArray];

	// Step 2: Fisher–Yates shuffle helper
	// Shuffles a single array in place
	const shuffle = arr => {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	};

	// Shuffle each half independently
	shuffle(halfA);
	shuffle(halfB);

	// Step 3: Mix cards from the two halves so that pairs are not next to each other
	// Randomly decide which half starts first to increase randomness
	const startWithA = Math.random() < 0.5;
	const shuffledDeck = [];
	for (let i = 0; i < halfA.length; i++) {
		if (startWithA) {
			shuffledDeck.push(halfA[i], halfB[i]);
		} else {
			shuffledDeck.push(halfB[i], halfA[i]);
		}
	}

	// Step 4: Perform safe swaps to break predictable patterns
	// Swap random cards only if it does not place matching pairs next to each other
	const len = shuffledDeck.length;
	for (let n = 0; n < len; n++) {
		const i = Math.floor(Math.random() * len);
		const j = Math.floor(Math.random() * len);
		if (
			i !== j &&														 // don't swap the same card
			shuffledDeck[i] !== shuffledDeck[j] && // cards must be different
			shuffledDeck[i] !== shuffledDeck[j - 1] &&
			shuffledDeck[i] !== shuffledDeck[j + 1] &&
			shuffledDeck[j] !== shuffledDeck[i - 1] &&
			shuffledDeck[j] !== shuffledDeck[i + 1] // Only swap if it doesn’t place a pair side by side
		) {
			[shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
		}
	}

	// Return the fully shuffled deck
	return shuffledDeck;
}

// Update score colors
// Updates the score displayed on the UI and changes its color based on the value
const updateScoreUI = () => {
	// Update the score number in the UI
	scoreEl.innerText = score;

	// Remove any previous score color classes
	scoreEl.classList.remove("low-score", "medium-score", "moderate-score");

	// Add a new class depending on the current score
	// This changes the color of the score to reflect performance
	if (score < 30) {
		// Low score: display in the "low-score" color
		scoreEl.classList.add("low-score");
	} else if (score < 50) {
		// Medium score: display in the "medium-score" color
		scoreEl.classList.add("medium-score");
	} else if (score < 70) {
		// Moderate score: display in the "moderate-score" color
		scoreEl.classList.add("moderate-score");
	}
}

// If win - visual feedback of confetti
const createConfettiBurst = () => {
	// Creates multiple confetti pieces
	for (let i = 0; i < 60; i++) {
		const confetti = document.createElement("div");
		confetti.classList.add("confetti");

		// Randomly assigns a color to each confetti piece
		const colors = ["#f12ec0", "#116179", "#ffcc00", "#4caf50"];
		confetti.style.backgroundColor =
			colors[Math.floor(Math.random() * colors.length)];

		// Sets a random position for each confetti piece
		const x = (Math.random() - 0.5) * 600 + "px";
		const y = (Math.random() - 0.5) * 600 + "px";

		confetti.style.setProperty("--x", x);
		confetti.style.setProperty("--y", y);

		// Applies animation for the burst effect
		confetti.style.animation = "burst 0.9s ease-out forwards";

		// Add the confetti to the page so the .confetti style and burst animation work
		document.body.appendChild(confetti);

		// Removes the confetti after the animation completes
		setTimeout(() => {
			confetti.remove();
		}, 800);
	}
}

// If lose - visual feedback of rain
// Shows falling rain as visual feedback when the player loses
const createRainFail = () => {
	const numberOfDrops = 100; // total number of raindrops
	// Creates each raindrop
	for (let i = 0; i < numberOfDrops; i++) {
		const drop = document.createElement("div");
		drop.classList.add("rain-drop"); // apply CSS styles and animation
		// Random horizontal position
		drop.style.left = Math.random() * window.innerWidth + "px";

		// Random animation speed and delay for natural look
		drop.style.animationDuration = 1.5 + Math.random() * 1.5 + "s";
		drop.style.animationDelay = Math.random() * 1.5 + "s";

		// Randomize raindrop size
		drop.style.width = 2 + Math.random() * 4 + "px";
		drop.style.height = 15 + Math.random() * 15 + "px";

		// Add the raindrop to the page so CSS animation runs
		document.body.appendChild(drop);

		// Removes raindrop effect after animation ends 
		setTimeout(() => drop.remove(), 4000);
	}
}

// =======================
// 	FETCH DATA TO POPULATE CARDS
// =======================

// Load card data from JSON
// Fetches the card information from a JSON file and stores it in the cards variable
fetch("assets/data/cards.json")
	.then((res) => {
		// Checks if the response is ok (status 200–299)
		if (!res.ok) {
			throw new Error("404 or server error"); // handle errors if file not found or server fails
		}
		// Parse the response as JSON
		return res.json();
	})
	.then((data) => {
		// Saves the loaded cards into the variable for the game
		cards = data;
	})
	.catch((err) => {
		// Handle errors that happened during fetch or parsing
		console.error("Failed to load cards:", err);
		// Provide feedback to the player in the game board
		gameBoard.innerText = "Something went wrong. Please try again later.";
	});


// =======================
// 	EVENT LISTENERS
// =======================

// fetching name before starting the game
startForm.addEventListener("submit", (e) => {
	e.preventDefault();

	formError.innerText = "";

	playerName = document.getElementById("player-name").value.trim();

	if (playerName.length < 2) {
		formError.innerText = "Please enter at least 2 characters.";
		return;
	}
	if (cards.length === 0) {
		formError.innerText = "Cards are still loading. Please wait a moment.";
		return;
	}

	startGame(playerName);
});

//handeling click for play again
playAgainBtn.addEventListener("click", restartGame);

//handeling click for new game/back to start
newGameBtn.addEventListener("click", newGame);

// handeling click for gameinfo-modal to open
logoBtn.addEventListener("click", () => {
	gameInfoModal.classList.remove("hidden");
});

// handeling click for rules-modal to open
rulesBtn.addEventListener("click", () => {
	rulesModal.classList.remove("hidden");
});

// Modal close handlers (click close button or click outside modal)
// Click close-button
document.querySelectorAll(".close-btn").forEach(btn => {
	btn.addEventListener("click", () => {
		btn.closest(".rules-modal").classList.add("hidden");
	});
});

// Click outside the modal
[rulesModal, gameInfoModal].forEach(modal => {
	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			modal.classList.add("hidden");
		}
	});
});