# Memory Match

Memory Match is a classic memory game where players flip over cards to find matching pairs. The game is designed with a playful, child-friendly aesthetic, making it appealing to players of all ages. Players click on two cards at a time: if the cards match, they remain face-up; if they do not match, they are turned back over.

The scoring system starts each game at 100 points, with 5 points subtracted for each mismatch. Players are encouraged to remember card positions carefully to maintain a high score.

[View live project here:]

---

## Table of Contents
1. [User Experience (UX)](#user-experience-ux)
   - [Target Audience](#target-audience)
   - [User Stories](#user-stories)
     - [Player Goals](#player-goals)
     - [Game Flow Goals](#game-flow-goals)
   - [Accessibility](#accessibility)
     - [Screen Reader Support](#screen-reader-support)
     - [Semantic HTML](#semantic-html)
     - [Form Accessibility](#form-accessibility)
     - [Visual Accessibility](#visual-accessibility)
     - [Future Improvements](#future-improvements)
2. [Design](#design)
   - [Layout](#layout)
   - [Colour Scheme](#colour-scheme)
   - [Typography](#typography)
   - [Responsive Design](#responsive-design)
3. [Features](#features)
   - [Current Features](#current-features)
     - [Header & Navigation](#header--navigation)
     - [Welcome Form](#welcome-form)
     - [Gameboard](#gameboard)
     - [Card Mechanics](#card-mechanics)
     - [Matching Logic](#matching-logic)
     - [Scoreboard](#scoreboard)
     - [End Screen](#end-screen)
     - [Modals](#modals)
     - [Play Again / New Game](#play-again--new-game)
   - [Future Features](#future-features)
4. [Technologies Used](#technologies-used)
   - [Core Technologies](#core-technologies)
   - [Tools & Resources](#tools--resources)
5. [Development Process](#development-process)
6. [Development & Deployment](#development--deployment)
   - [GitHub Pages](#github-pages)
   - [Updating the Deployment](#updating-the-deployment)
7. [Testing](#testing)
   - [Manual Testing](#manual-testing)
   - [Functionality Testing](#functionality-testing)
   - [Accessibility Testing](#accessibility-testing)
   - [Error Handling Testing](#error-handling-testing)
   - [Performance Testing](#performance-testing)
   - [Responsive Testing](#responsive-testing)
   - [Lighthouse](#lighthouse)
   - [Browser Testing](#browser-testing)
   - [Code Validation](#code-validation)
   - [Bugs & Fixes](#bugs--fixes)
     - [cardsArray Issue](#cardsarray-issue)
     - [Score UI Not Resetting](#score-ui-not-resetting)
     - [Shuffle Logic for Cards](#shuffle-logic-for-cards)
8. [Known Bugs](#known-bugs)
9. [Credits](#credits)
   - [Code](#code)
   - [Content](#content)


---

# User Experience (UX)

## Target Audience
The target audience for this memory game is users who enjoy simple, casual games and want to challenge or improve their memory.

They are most likely to:
- want a quick and easy game that is simple to understand
- play in short sessions, for example during breaks or free time
- appreciate a playful and visually engaging design
- access the game on different devices, including mobile and tablet

The game is designed to be accessible to a wide audience rather than a specific group. Since memory games are familiar to most people, it can appeal to both children and adults.

To make the experience more inclusive and child-friendly, the design uses:
- bright and playful colors
- simple and recognizable icons (such as animals and everyday objects)

At the same time, the scoring system (losing points for incorrect matches) adds a small challenge, making the game engaging even for older users who want to test their memory and improve their performance.

## User Stories

### User Experience Goals
The main goal of the game is to provide a simple, intuitive, and playful experience.
The design focuses on clarity and ease of use, while still offering a small level of challenge through scoring and memory-based gameplay.

### Player Goals

As a player I want to: 
- Quickly understand how the game works
- Start the game easily and without friction
- Play in a clean and non-distracting interface
- Be able to access rules or instructions at any time
- Track performance through moves, misses, and score
- Feel motivated through visual feedback (e.g. score changes)
- Improve memory and achieve a higher score
- Replay the game to try to perform better
- Allow a new player to start a fresh game

### Game flow goals

The following describes the expectation of how the user moves through the game and interacts with it:

1. Start Screen
- User enters their name
- User clicks the start button

2. Game Begins
- Cards are shuffled and displayed face down
- Score, moves, and misses are visible
- Score starts at 100 points

3.  Gameplay Interaction
- User clicks one card → it flips
- User clicks a second card → it flips

3. Matching Logic
- If cards match → they stay visible
- If cards do not match → they flip back and the user loses five points

4. Ongoing Feedback
- Moves, misses, and score update continuously
- Score changes color when it becomes low
- User can open rules at any time

5. Game End
- All pairs are matched
- Game board disappears
- End screen appears showing:
    * Final score
    * Total moves
    * Total misses

6. Next Actions
- User can choose to:
    * “Play Again” (same player)
    * “New Game” (return to start screen)

---

## Design
The design aims to create a fun and engaging experience without overwhelming the user. 
A clean and simple visual style was chosen to keep the focus on the gameplay. 
Some visual design ideas were inspired by another student [project](https://github.com/lowrycode/swaplett-project?tab=readme-ov-file) shown to me by my code facilitator, such as clean layout and playful typography. However, game logic and implementation were developed independently.

Colours and animations are used to enhance the user experience and provide feedback, 
such as the score changing colour as it decreases and different animations depending on whether the player wins or loses. 
The overall goal was to balance playfulness with clarity, ensuring that important information is always easy to see.

### Layout
Initial layouts were planned using Lucidchart for mobile, tablet, and desktop to ensure a responsive structure across different devices.

<div style="display: flex; gap: 10px; align-items: flex-start;"> 
<div style="text-align: center; margin: 10px;" >
	    <strong>Desktop</strong><br>
<img src="/assets/documentation/wireframe-desktop.png" width="300"> 
</div>
  <div style="text-align: center; margin: 10px;">
	    <strong>Tablet</strong><br>
<img src="/assets/documentation/wireframe-tablet.png" width="250"> 
</div>
  <div style="text-align: center; margin: 10px;">
    <strong>Mobile</strong><br>
<img src="/assets/documentation/wireframe-mobile.png" width="200">
</div>
</div>

The layout is structured to guide the user through the game in a clear and intuitive way.
- A header contains the game title, logo, and access to the rules
- The start screen allows the user to enter their name before beginning the game
- The game board is centered on the page to maintain focus
- Game information such as moves, misses, and score is displayed clearly below the board
- An end screen appears after the game finishes, showing the result and options to restart or start a new game

### Colour Scheme
The color palette is divided into three groups, each serving a specific purpose:

1. **Base Colors** – These are neutral colors used for the background, text, borders, and surfaces. They provide contrast and ensure readability, making sure important information stands out against the background.

<div align="center">
<img src="/assets/documentation/base-colors.png" width="400">
</div>

2. **Game-Enhancing Colors** – These colors are inspired by the logo and used to create a fun, playful feel. For example, gradients on the H1 heading and card fronts, hover effects on buttons, footer background, and the score/moves/misses display in the scoreboard. The secondary color is extracted directly from the logo using a color picker, ensuring a consistent visual identity across the interface. The aim was to consistently reuse colors across elements so that the interface feels cohesive and visually engaging.

<div align="center">
<img src="/assets/documentation/game-colors.png" width="400">
</div>

3. **Feedback Colors** – These colors provide visual feedback based on game events. For example, the scoreboard colors gradually change as points decrease, and matched cards briefly turn green to indicate success. This helps players intuitively understand their performance without needing extra text instructions. The cards also get a lightgreen backgroundcolor when matched.

<div align="center">
<img src="/assets/documentation/feedback-colors.png" width="400">
</div>

Overall, the palette was chosen to balance **playfulness** with **clarity**, ensuring the game is visually appealing while keeping important information easy to notice.

### Typography
Two fonts were chosen to create a balance between readability and playfulness. "Varela" is used for body text and interface elements, providing a simple style that doesn’t distract from gameplay. "Bangers" is used for the H1 heading, giving a fun feel to the logo and main titles. Both fonts were selected from Google Fonts to ensure web compatibility and a consistent look across devices.

Body font: Varela

<div align="center">
<img src="/assets/documentation/font-body.png" width="400">
 </div>

Heading font (H1): Bangers

<div align="center">
<img src="/assets/documentation/font-h1.png" width="400">
</div>

### Icons
The icons were selected from the Flaticon library with a focus on clarity, playfulness, and broad recognition. The goal was to create a visual style that feels lighthearted and accessible to players of all ages.

To achieve this, the icons represent a mix of familiar everyday objects—such as a dog, apple, and cupcake—combined with more fun and imaginative elements like a dinosaur and a wizard hat. This balance helps make the game both easy to understand and visually engaging.

The colorful and friendly design of the icons contributes to a playful user experience, reinforcing the game’s intention to feel enjoyable, simple, and inviting.

<div align="center">
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 400px;">
  <img src="assets/icons/dog.png" width="80">
  <img src="assets/icons/apple.png" width="80">
  <img src="assets/icons/cupcake.png" width="80">
  <img src="assets/icons/dinosaur.png" width="80">
  <img src="assets/icons/wizard-hat.png" width="80">
  <img src="assets/icons/smiling-face.png" width="80">
  <img src="assets/icons/goggles.png" width="80">
  <img src="assets/icons/sports.png" width="80">
</div>
</div>


### Responsive Design
The responsive design ensures that the gameboard, scoreboard, and rules modal are displayed correctly across different devices, so the interface never interferes with gameplay. This project follows a mobile-first approach, where the game grid grows with the screen size.

The scoreboard is stacked vertically on mobile and small tablets, and displayed in a row on larger tablets and desktop screens. To achieve a consistent layout across devices, both standard breakpoints and custom breakpoints were used:

| Breakpoint     | Main Changes                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 425px          | Slightly larger H1 font and icons; gameboard cards grow from 70px → 90px.                                                                          |
| 480px          | Scoreboard info boxes and end-screen text increase in size; improved readability.                                                                  |
| 525px          | Gameboard cards grow to 100px with increased gaps; scoreboard switches from vertical stacking to horizontal layout.                                |
| 576px          | Typography scales up (H1, H2, paragraphs); header margins and nav gaps increase; start form switches to row layout; buttons and modal text larger. |
| 640px          | Gameboard cards grow to 120px; rules modal max-width increased for better display on tablets.                                                      |                                                                      |
| 1200px         | Gameboard cards expand to 130px; scoreboard gaps increase for desktop; overall layout more spacious.                                               |


The modals (popups) for rules and game info are scrollable and aligned at the top on smaller screens. On taller screens (above 700px in height), modals are centered vertically for a better visual experience.

### Intuitive Design & User Feedback
The game is designed to keep the player informed and motivated. Key elements of intuitive design and feedback include:

- Score feedback: The score changes color at set breakpoints (70, 50, 30) to give a clear visual cue of performance.
- Win/loss animations: Winning triggers a confetti effect; losing triggers rain and a gray background to signal failure.
- Card interactions: Cards slightly pop up on hover and stay flipped and green when matched, providing visual feedback.
- Rules accessibility: The rules modal is always available, helping players understand the game mechanics.
- Responsive feedback placement: Scoreboard, moves, and misses are visible and adapt to different screen sizes.

---

## Features & Game logic

### Current Features & logic

The game mechanics are designed around matching cards, tracking score, moves, and misses, and providing immediate visual feedback through colors and animations. Below, each feature is described in detail.

#### Navigation / Header
The header contains three main elements:

- Logo / Icon – A small image of two cards stacked. On hover, it slightly enlarges to indicate it is clickable. Currently, clicking the logo shows a brief summary of how the game is built; in future versions, it could open a popup with additional information about the game or game settings.

<div align="center">
<img src="/assets/documentation/memory-logo.png" width="150"> 
</div>

- Heading (H1) – Positioned in the center, using the playful gradient font to maintain visual identity.

<div align="center">
<img src="/assets/documentation/font-h1.png" width="250">
</div>

- Rules Button – Positioned to the right, styled with the secondary color. On hover, the background turns white, and clicking it opens a modal with the game rules.

<div align="center">
<img src="/assets/documentation/rules-btn.png" width="150">
</div>

The header and navigation elements are responsive: they scale up or down depending on screen size, but their layout remains consistent across devices.

| Mobile 				 | Tablet 			  | Desktop 			  |
|----------------|----------------|-----------------|
| <img src="/assets/documentation/header-mobile.png" width="200"> | <img src="/assets/documentation/header-tablet.png" width="250"> | <img src="/assets/documentation/header-desktop.png" width="300"> |

#### Welcome Form
The welcome form allows the player to enter their name before starting the game. 
It consists of a simple design: an `<h2>` prompt “Enter your name”, an input field, and a “Start Game” button (white with a green hover effect). 
On mobile devices, the input field and button are stacked vertically, 
with the button spanning the same width as the input for a balanced look. 
On tablets and desktops, the input and button are displayed side by side, with the button slightly smaller than the input.

| Mobile 				 | Tablet & Desktop 								|
|----------------|----------------------------------|
| <img src="/assets/documentation/start-form-mobile.png" width="300"> | <img src="/assets/documentation/start-form-desktop.png" width="350"> |

When the player clicks the button, the startGame function is activated. 
The name entered in the form is saved as a variable for the duration of the game and used to personalize messages throughout the experience. 
For example, after clicking “Start Game”, the message “Let’s go, [playerName]!” is displayed above the gameboard. 
The name is also referenced in the end-of-game message, so the player sees a personalized message whether they win or lose. 
If the player chooses to play again, the same name is retained, maintaining the personalized experience.

<div align="center">
<img src="/assets/documentation/welcome-message.png" width="300">
</div>

The form also ensures the game does not start automatically when the page loads, giving more control over gameplay. 
In the future, using local storage could allow tracking multiple game sessions, creating a persistent scoreboard for the player.

### Gameboard
The gameboard is the main interactive area where the memory match game takes place. 
It consists of a grid of 12 cards that players can flip to reveal hidden images.

#### Layout:
The board is implemented as a CSS grid, initially 4×4 cards and is centered on the screen across all devices. 

<div align="center">
<div style="display: flex; gap: 10px; align-items: flex-start;"> 
    <strong>Mobile</strong><br>
    <img src="/assets/documentation/game-board-mobile.png" width="250">
  </div>
  <div style="display: inline-block; text-align: center;">
    <strong>Desktop/Tablet</strong><br>
    <img src="/assets/documentation/game-board-desktop.png" width="300">
  </div>
</div>

#### Fetching Card-content (Icons)
The icons were chosen from the [flaticon library](https://www.flaticon.com/) and stored in a local JSON file. 
When the game starts, they are loaded using a fetch request, which returns a Promise. The code checks the response for errors before parsing it as JSON, and any errors are caught to display a message to the user. I chose a Promise-based fetch instead of async/await because the file is small and local, making this approach simple. However the async/await could also be used to make the execution order even clearer. 


### Future Features


---

## Technologies Used

- HTML  
- CSS  
- JavaScript  

---

## Development & Deployment

### Development


### Deployment


---

## Testing

### Manual Testing


### Responsive Testing

---

## Known Bugs

---

## Credits

### Code

### Content
