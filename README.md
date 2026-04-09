# Memory Match

Memory Match is a classic memory game where players flip over cards to find matching pairs. The game is designed with a playful, child-friendly aesthetic, making it appealing to players of all ages. Players click on two cards at a time: if the cards match, they remain face-up; if they do not match, they are turned back over.

The scoring system starts each game at 100 points, with 5 or 10 points subtracted for each mismatch. Players are encouraged to remember card positions carefully to maintain a high score.

<div align="center">
<img src="/assets/documentation/amiresponsive.png" width="600">
</div>

[View live project here](https://fannyhenriques.github.io/milestone-project-2/)

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
   - [Future Features](#future-features)
4. [Technologies Used](#technologies-used)
   - [Core Technologies](#core-technologies)
   - [Tools & Resources](#tools--resources)
5. [Development Process](#development-process)
6. [Development & Deployment](#development--deployment)
   - [GitHub Pages](#github-pages)
   - [Updating the Deployment](#updating-the-deployment)
7. [Testing](#testing)
   - [Bugs & Fixes](#bugs--fixes)
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

1. Understand how the game works through clear instructions before or during gameplay
2. Choose a difficulty level to adjust the challenge
3. Choose the number of cards to adjust the challenge
4. Start the game easily by entering my name and clicking a start button
5. See clear visual feedback when two cards match or do not match
6. Be able to access rules or instructions at any time
7. Track my performance through score, moves, or misses displayed on screen
8. See visual feedback when my score changes
9. See a clear end result (win/lose) with feedback based on my performance
10. Replay the game to try to perform better
11. Restart the game as the same or a new player and change difficulty and/or number of cards

### Game flow goals

The following describes the expectation of how the user moves through the game and interacts with it:

1. Start Screen
- User enters their name
- User choose level and ammount of cards
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

### Wireframes
Initial layouts were planned using Lucidchart for mobile, tablet, and desktop to ensure a responsive structure across different devices.

<div style="display: flex; flex-direction: row; gap: 20px; align-items: flex-start;"> 
<img src="/assets/documentation/wireframe-desktop.png" width="300"> 	  
<img src="/assets/documentation/wireframe-tablet.png" width="200"> 
<img src="/assets/documentation/wireframe-mobile.png" width="150">
</div>

- A header contains the game title, logo, and access to the rules
- The start screen allows the player to enter their name and select a difficulty level before starting the game
- The game board is centered on the page to maintain focus
- Game information such as moves, misses, and score is displayed clearly below the board
- An end screen appears after the game finishes, showing the result and options to restart or start a new game

### Colour Scheme
The color palette is divided into three groups, each serving a specific purpose:

1. **Base Colors** – These are neutral colors used for the background, text, borders, and surfaces. They provide contrast and ensure readability, making sure important information stands out against the background.

<div align="center">
<img src="/assets/documentation/base-colors.png" width="600">
</div>

2. **Game-Enhancing Colors** – These colors are inspired by the logo and used to create a fun, playful feel. For example, gradients on the H1 heading and card fronts, hover effects on buttons, footer background, and the score/moves/misses display in the scoreboard. The secondary color is extracted directly from the logo using a color picker, ensuring a consistent visual identity across the interface. The aim was to consistently reuse colors across elements so that the interface feels cohesive and visually engaging.

<div align="center">
<img src="/assets/documentation/game-colors.png" width="600">
</div>

3. **Feedback Colors** – These colors provide visual feedback based on game events. For example, the scoreboard colors gradually change as points decrease, and matched cards briefly turn green to indicate success. This helps players intuitively understand their performance without needing extra text instructions. The cards also get a lightgreen backgroundcolor when matched.

<div align="center">
<img src="/assets/documentation/feedback-colors.png" width="600">
</div>

### Typography
Two fonts were chosen to create a balance between readability and playfulness. "Varela" is used for body text and interface elements, providing a simple style that doesn’t distract from gameplay. "Bangers" is used for the H1 heading, giving a fun feel to the logo and main titles. Both fonts were selected from [Google Fonts](https://fonts.google.com/).

Body font: Varela

<div align="center">
<img src="/assets/documentation/font-body.png" width="500">
 </div>

Heading font (H1): Bangers

<div align="center">
<img src="/assets/documentation/font-h1.png" width="500">
</div>

### Icons
The icons were selected from the Flaticon library with a focus on clarity, playfulness, and broad recognition. The goal was to create a visual style that is accessible to players of all ages and contributes to a playful user experience.

The icons represent a mix of familiar everyday objects—such as a dog, apple, and cupcake—combined with more fun and imaginative elements like a dinosaur and a wizard hat. This balance helps make the game both easy to understand and visually engaging.

<div align="center">
<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; max-width: 400px;">
  <img src="assets/icons/dog.png" width="80">
  <img src="assets/icons/apple.png" width="80">
  <img src="assets/icons/cupcake.png" width="80">
  <img src="assets/icons/dinosaur.png" width="80">
  <img src="assets/icons/wizard-hat.png" width="80">
  <img src="assets/icons/smiling-face.png" width="80">
  <img src="assets/icons/goggles.png" width="80">
  <img src="assets/icons/sports.png" width="80">
	<img src="assets/icons/snowman.png" width="80">
	<img src="assets/icons/tools.png" width="80">
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
| 640px          | Gameboard cards grow, rules modal max-width increased for better display on tablets.                                                      |                                                                      |
| 1200px         | Gameboard cards expand, scoreboard gaps increase for desktop; overall layout more spacious.                                               |


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

The game mechanics are designed around matching cards, tracking score, moves, and misses, and providing immediate visual feedback through colors and animations. Below, each feature and logic is described.

### Navigation / Header
The header contains three main elements:

- Logo / Icon – A small stacked card icon that enlarges on hover. Clicking it shows a brief game summary (future: popup with info/settings).
- Heading (H1) – Centered with a playful gradient font for visual identity.
- Rules Button – Positioned to the right; changes to white on hover and opens a rules modal on click.

| Mobile 				 | Tablet 			  | Desktop 			  |
|----------------|----------------|-----------------|
| <img src="/assets/documentation/header-mobile.png" width="250"> | <img src="/assets/documentation/header-tablet.png" width="300"> | <img src="/assets/documentation/header-desktop.png" width="350"> |

### Start Form
The welcome form lets the player enter their name, chose difficult level and the ammount of cards before starting the game. It includes a heading, an input field, two dropdown menus for selecting difficulty level and card count and a “Start Game” button.


| Mobile 				 | Tablet & Desktop 								|
|----------------|----------------------------------|
| <img src="/assets/documentation/start-form-mobile.png" width="300"> | <img src="/assets/documentation/start-form-desktop.png" width="350"> |

When the button is clicked, the startGame function runs. The entered name is stored and used for personalized end messages, such as displaying the player’s score or indicating when they run out of points. The name and settings remain if the player chooses to play again.
The form prevents the game from starting automatically. In the future, local storage could enable session tracking and a persistent scoreboard.

### Modals
The game uses modals to show additional info without leaving the main interface, such as rules or game info.

Rules Modal
- Triggered by the rulesBtn button
- Displays the game rules in a scrollable popup on smaller screens
- Can be closed by clicking the close button or clicking outside the modal

<div align="center">
<img src="/assets/documentation/rules-modal.png" width="400">
</div>

Game Info Modal
- Triggered by the logoBtn button
- Shows a brief summary of how the game is built

<div align="center">
<img src="/assets/documentation/info-modal.png" width="400">
</div>

Modals are managed with CSS and JavaScript: a hidden class toggles visibility and animations, and event listeners handle button and background clicks to ensure intuitive interaction.

### Gameboard
The gameboard is the main interactive area where the memory match game takes place. 
Depending on ammont of cards chosen it consists of a grid of 12, 16 or 20 cards.

#### Layout:
The board is implemented as a CSS grid and is centered on the screen. Depending om screen size the grid takes up 3-4 columns and/or 3-5 rows. 

- Gameboard mobile:

| 12 Cards                                                         | 16 Cards                                                         | 20 Cards                                                         |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| <img src="/assets/documentation/grid-12-mobile.png" width="300"> | <img src="/assets/documentation/grid-16-mobile.png" width="300"> | <img src="/assets/documentation/grid-20-mobile.png" width="300"> |

- Gameboard desktop: 

| 12 Cards                                                          | 16 Cards                                                          | 20 Cards                                                          |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| <img src="/assets/documentation/grid-12-desktop.png" width="300"> | <img src="/assets/documentation/grid-16-desktop.png" width="300"> | <img src="/assets/documentation/grid-20-desktop.png" width="300"> |


#### Fetching Card-content (Icons)
The icons were chosen from the [flaticon library](https://www.flaticon.com/) and stored in a local JSON file. 
When the game starts, they are loaded using a fetch request, which returns a Promise. The code checks the response for errors before parsing it as JSON, and any errors are caught to display a message to the user. Promise-based fetch was chosen instead of async/await because the file is small and local, making this approach simple. However the async/await could also be used to make the execution order even clearer. 

#### Shuffling Logic
To create a fair and unpredictable game, the card deck is shuffled in multiple steps.

1. The original card array is duplicated to form pairs.
2. These two arrays are then shuffled independently using the Fisher–Yates algorithm.
3. After shuffling, the two halves are interleaved into a single deck. 
4. Additional random swaps are performed to prevent predictable patterns. This reduces the likelihood of matching cards being placed directly next to each other.

The purpose of this is to keep the deck random and well-balanced for a fun game.

#### Rendering Cards & card flipping
Once the card data has been fetched and shuffled, the game board is dynamically generated.

- The game board is dynamically generated after fetching and shuffling the card data.
- Each card is a nested DOM element with front and back; the back shows a gradient, the front displays the icon.
- Card identity is stored in a data attribute for easy comparison.
- Hovering slightly scales the card to indicate interactivity; clicking or focusing flips it.
- Flip behavior is handled by toggling a flipped class in JavaScript.
- The system tracks the first and second selected cards.
- A lockBoard mechanism prevents flipping more than two cards at once.

<div align="center">
<img src="/assets/documentation/flip-nomatch.png" width="400">
</div>

#### Matching Logic:
When two cards are flipped, their data-name attributes are compared in checkMatch().
- No match: A miss is registered, the score decreases, and the cards flip back after a short delay; the board is locked during this time to prevent extra flips.
- Match: Cards stay flipped, a matched class highlights them (light green), and the match counter increases.

<div align="center">
<img src="/assets/documentation/flip-match.png" width="400">
</div>

#### Reset Logic & End Game Condition
After each turn, the game resets the selected card state to prepare for the next interaction. 
The game ends under two conditions:

- Win: All card pairs have been successfully matched 
- Loss: The player runs out of points (score reaches zero)

In both cases, the endGame() function is triggered, which transitions the interface from the game board to the end screen.

### Scoreboard
The scoreboard provides real-time feedback on the player’s performance, tracking moves, misses, and score. 

It consists of three main variables:
- moves – counts the number of turns taken.
- misses – counts incorrect matches.
- score – starts at 100 and decreases by 5 for each miss.

| Desktop                                                                                        | Mobile                                                                                        |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| <div align="center"><img src="/assets/documentation/scoreboard-desktop.png" width="400"></div> | <div align="center"><img src="/assets/documentation/scoreboard-mobile.png" width="400"></div> |


These variables are dynamically updated in the UI using the corresponding DOM elements. 
Every time a move is made or a miss occurs, the updateScoreUI() function is called to reflect the current state.
The player earns 5+ points for each successful match.

To enhance feedback, the score element changes color at certain thresholds:

Moderate score (70–50):

<div align="center">
<img src="/assets/documentation/score-moderate.png" width="500">
</div>

Medium score (50–30)

<div align="center">
<img src="/assets/documentation/score-medium.png" width="500">
</div>

Low score (<30)

<div align="center">
<img src="/assets/documentation/score-low.png" width="500">
</div>

### End Screen
When the game ends, the interface transitions from the game board to a dedicated end screen, handled by the endGame() function.

The content and animations depend on the outcome:
Win scenario
- The player sees a personalized congratulatory message, e.g., 🎉 Well done [playerName]! 🎉
- Final statistics are displayed: score, total moves, and misses
- A confetti burst animation is triggered to visually celebrate the victory

<div align="center">
<img src="/assets/documentation/confetti.png" width="300">
</div>

Lose scenario
- A different personalized message is shown, e.g., 😢 Oh no [playerName]! You ran out of points. Try again!
- Score details are hidden to avoid confusion
- A rain effect combined with a background change reinforces the losing state

<div align="center">
<img src="/assets/documentation/rainfall.png" width="400">
</div>

### Play Again / New Game Buttons
The game provides two options for restarting: Play Again and New Game, each tied directly to specific JavaScript functions.

Play Again
- Triggered by the playAgainBtn button.
- Calls the restartGame() function, which:
- Resets the game board and shuffles the cards (shuffleCards())
- Clears moves, misses, and score (resetGameData())
- Keeps the player’s name and game-preferences intact for a personalized experience
- Allows the player to quickly replay without re-entering their name and settings

<div align="center">
<img src="/assets/documentation/play-again.png" width="300">
</div>

New Game
- Triggered by the newGameBtn button.
- Calls the newGame() function, which:
- Returns the player to the initial start screen (startSection)
- Clears all game data, including the player name and input field
- Hides game elements (gameBoard, gameInfo, welcomeMessage) for a fresh start

<div align="center">
<img src="/assets/documentation/new-game-png.png" width="300">
</div>

Both buttons ensure a smooth and predictable transition between game states, providing control over restarting while maintaining consistent gameplay logic.

### Footer
The footer is simple and displays a copyright notice at the bottom of the page.

<div align="center">
<img src="/assets/documentation/footer-desktop.png" width="500">
</div>

### 404 Page
The 404 page Displays:
-  A clear 404 message `<h1>404</h1>` to indicate the user has reached a non-existent page.
-  A short explanatory text informing the user that they landed in the wrong place.
- Adds playful visual cards for fun and engagement.
- Provides a “Back to Game” button for easy navigation back to the main game.

<div align="center">
<img src="/assets/documentation/404-page.png" width="300">
</div>

### Future Features
The game is designed to be scalable, and several enhancements could be implemented to increase replayability and challenge:

Themed Card Sets
- Allow players to choose from different card themes, such as movies, music, or nature. This would personalize the game experience and make it more visually engaging.

Timed Mode
- Add a countdown timer or stopwatch to track how long it takes players to complete the game. Completing the game faster could award bonus points, adding a competitive element.

Persistent Score Tracking
- Use local storage or a backend to save high scores and player progress, enabling players to compete with themselves or others over multiple sessions.

---
## Accessibility

This project was built with accessibility in mind to ensure the game can be enjoyed by a wider audience, including screen reader users. While memory games are visual by nature, several features were implemented to provide alternative feedback.

Screen Reader Support: Score updates, moves, and misses are announced via aria-live. Cards have descriptive ARIA labels indicating flipped/unflipped states.
- Keyboard & Focus: Cards are focusable with tabindex="0" and can be activated using Enter or Space. Focus styles highlight the selected card, and ARIA states (aria-pressed and aria-label) update dynamically.
- Semantic HTML: Logical use of `<header>`, `<main>`, `<section>`, and `<footer>` supports navigation.
- Form Accessibility: Inputs have labels (visually hidden) and live error feedback for invalid submissions.
- Visual Feedback: High contrast and clear color/size changes indicate score and game status.

Future Improvements: Full keyboard navigation for the board and more descriptive announcements for card matches and mismatches.

---

## Technologies Used

Core Technologies

| Technology               | Purpose / Notes                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| **HTML**                 | Structure and markup for the game interface (start screen, game board, modals, end screen) |
| **CSS**                  | Styling, layout, responsive design, animations (card flips, hover effects, confetti/rain)  |
| **JavaScript**           | Game logic, card flipping, matching, score tracking, event handling, dynamic UI updates    |
| **JSON**                 | Storing card data (icons, names) locally                                                   |

Tools & Resources

| Tool / Resource         | Purpose / Notes                                                                   |
| ----------------------- | --------------------------------------------------------------------------------- |
| **Git**                 | Version control for tracking changes                                              |
| **GitHub**              | Repository hosting and deployment                                 |
| **Browser Dev Tools**   | Debugging, inspecting elements, testing responsiveness, monitoring console errors |
| **Lighthouse**          | Performance, accessibility, SEO, and best practices audit                         |
| **Silktide**            | Accessibility and web standards testing                                           |
| **JSHint / Validators** | JavaScript, HTML, and CSS validation                                              |
| **ColorZilla**          | Picking and analyzing colors for UI                                               |
| **Flaticon**            | Source of icons used on cards                                                     |
| **Google Fonts**        | Typography for headings and text                                                  |
| **ChatGPT**             | Assistance with understanding logic	                              |


---

## Deployment

#### Deployment with GitHub Pages

This project is deployed using GitHub Pages, allowing you to access a live version of the website.
The following steps summarize the deployment process:

1. Initialize and push the project to GitHub
- Create the project locally in VS Code (or your preferred editor).
- Initialize Git in your project folder:

	`git init`

- Add and commit all files: 

	`git add .`
	`git commit -m "Initial commit"`

2. Create a remote repository on GitHub and push the project to the main branch:
- On GitHub, create a new repository. 
- Link your local project to the remote repository and push:

	`git remote add origin [repository-url]`
	`git branch -M main`
	`git push -u origin main`

3. Configure GitHub Pages
Navigate to your repository on GitHub, open Settings → Pages, and under Build and deployment select:
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

Make sure your project structure is correct: 
- an index.html file exists in the root directory
- all file paths (CSS, JavaScript, images) are relative. 
- Save the settings, and GitHub will automatically build and host your site.

5. Update the deployment
- Any changes made locally can be deployed by committing and pushing:

	`git add .`
	`git commit -m "Update website"`
	`git push`

GitHub Pages will automatically rebuild and deploy the latest version.

---

## Testing

### Manual Testing

Each user story and Game goal was tested to ensure the expected outcome was achieved. All passed, see screenshots below: 

### User Story Testing

| User Story | Expected Outcome / Result | Screenshot(s) |
| ---------- | ------------------------ | ------------- |
| 1. Understand how the game works through clear instructions before or during gameplay | Clear layout, visible UI, instructions accessible | <div align="center"><img src="/assets/documentation/rules-modal.png" width="150"></div> |
| 2. Choose a difficulty level to adjust the challenge | Difficulty selector works and updates game appropriately | <div align="center"><img src="/assets/documentation/user-story-2.png" width="150"></div> |
| 3. Choose the number of cards to adjust the challenge | Card count selection works and board updates correctly | <div align="center"><img src="/assets/documentation/user-story-3.png" width="300"></div> |
| 4. Start the game easily by entering my name and clicking a start button | User can enter name and start game without issues | <div align="center"><img src="/assets/documentation/user-story-4-btn.png" width="300"></div><div align="center"><img src="/assets/documentation/user-story-4-board.png" width="300"></div> |
| 5. See clear visual feedback when two cards match or do not match | Matching cards stay flipped, non-matching flip back, score updates | <div align="center"><img src="/assets/documentation/user-story-5-nomatch.png" width="300"></div><div align="center"><img src="/assets/documentation/user-story-5-match.png" width="300"></div> |
| 6. Be able to access rules or instructions at any time | Rules modal opens/closes correctly | <div align="center"><img src="/assets/documentation/user-story-6.png" width="300"></div> |
| 7. Track my performance through score, moves, or misses displayed on screen | Values update in real-time during gameplay | <div align="center"><img src="/assets/documentation/user-story-7.png" width="300"></div> |
| 8. See visual feedback when my score changes | Score changes color based on thresholds | <div align="center"><img src="/assets/documentation/user-story-8-60.png" width="300"></div><div align="center"><img src="/assets/documentation/user-story-8-40-png.png" width="300"></div><div align="center"><img src="/assets/documentation/user-story-8-20.png" width="300"></div> |
| 9. See a clear end result (win/lose) with feedback based on my performance | End screen appears with final score, moves, misses | <div align="center"><img src="/assets/documentation/confetti.png" width="300"></div><div align="center"><img src="/assets/documentation/rainfall.png" width="300"></div> |
| 10. Replay the game to try to perform better | “Play Again” restarts game correctly | <div align="center"><img src="/assets/documentation/play-again.png" width="300"></div> |
| 11. Restart the game as the same or a new player and change difficulty and/or number of cards | “New Game” resets everything and allows updated settings | <div align="center"><img src="/assets/documentation/new-game-png.png" width="300"></div> |


### Functionality & Edge Case Testing

Manual testing was performed to ensure all core game features and edge cases behave as expected:

| Feature / Edge Case                         | Expected Behavior                                                 | Result |
| ------------------------------------------- | ----------------------------------------------------------------- | ------ |
| Card Flipping                               | Cards flip correctly when clicked                                 | Pass   |
| Card Selection Limit                        | Only two cards can be flipped at a time (`lockBoard`)             | Pass   |
| Matching Logic (Match)                      | Matching cards stay flipped and are marked as matched             | Pass   |
| Matching Logic (Miss)                       | Non-matching cards flip back after a short delay                  | Pass   |
| Score Tracking                              | Moves, misses, and score update correctly                         | Pass   |
| Win Condition                               | Game ends when all pairs are matched (`matches === cards.length`) | Pass   |
| Lose Condition                              | Game ends when score reaches 0 (`score <= 0`)                     | Pass   |
| Play Again                                  | Game resets board and score but keeps player name                 | Pass   |
| New Game                                    | Game resets completely and returns to start screen                | Pass   |
| Rapid clicking on multiple cards            | Only two cards can be flipped at a time (`lockBoard`)             | Pass   |
| Double-clicking the same card               | Second click ignored                                              | Pass   |
| Submitting empty/short name                 | Form prevents submission                                          | Pass   |
| Not selecting difficulty level or grid size | Cannot start game until both are chosen                           | Pass   |
| Clicking outside modals                     | Modal closes correctly                                            | Pass   |


### Accessibility Testing
Accessibility was considered to ensure the game is usable for a wide range of users, including those navigating via keyboard or assistive technologies.

| Feature               | Expected Outcome                                             | Result |
| --------------------- | ------------------------------------------------------------ | ------ |
| Keyboard Navigation   | User can navigate using Tab and activate elements with Enter |  Pass  |
| Focus States          | All interactive elements have visible focus indicators       |  Pass  |
| Color Contrast        | Text and UI elements are readable with sufficient contrast   |  Pass  |
| Image Alt Text        | All images include descriptive `alt` attributes              |  Pass  |
| Screen Reader Support | Content is readable and logically structured (basic testing) |  Pass  |

Accessibility testing was performed manually using browser tools and keyboard navigation.

### Error Handling Testing

Error handling was tested to ensure the game behaves predictably in unexpected situations.

The card data is fetched from a local JSON file using a Promise-based request. Error scenarios were simulated to verify that failed requests are properly caught and handled. In such cases, a fallback message is displayed to inform the user that something went wrong.
User input validation was also tested. The game prevents submission if the player name is too short or empty, ensuring that the game does not start with invalid data.

These checks help improve the overall stability of the application and ensure a smoother user experience even when errors occur.

### Performance Testing

Performance testing was conducted to ensure smooth gameplay and responsive interactions throughout the application.

Animations such as card flipping, confetti bursts, and rain effects were tested to ensure they run smoothly without stuttering or delays.
Gameplay performance was evaluated during extended interaction, confirming that no noticeable lag occurs when flipping cards or updating the game state.
Special attention was given to DOM management for dynamic elements. Animation elements (such as confetti and rain drops) are removed after completion to prevent unnecessary DOM buildup and potential performance issues.

Overall, the game performs efficiently, providing a seamless and responsive user experience

### Responsive Testing

Responsive testing was conducted using browser developer tools across multiple breakpoints, ranging from 320px (mobile) up to 1400px (desktop).

All core components were verified to maintain a consistent and functional layout across screen sizes, including:

- Navigation / Header
- Start Form
- Game Board
- Scoreboard
- End Screen
- Modals
- Footer

The layout adapts smoothly between mobile, tablet, and desktop views. However, due to variations in grid sizes, the responsiveness could be further improved—particularly in terms of spacing and gaps.

With more time, the grid layouts could transition more seamlessly between breakpoints, especially on mobile devices and certain tablet sizes. 

### Lighhouse

Lighthouse testing was performed to evaluate performance, accessibility, best practices, and SEO. A score of 100% was achieved in all categories on the start screen. Additional accessibility checks performed using Silktide. 

<div align="center">
<img src="/assets/documentation/lighthouse-desktop.png" width="500">
</div>

Due to the interactive nature of the application and its reliance on JavaScript, full Lighthouse testing across all game states was limited. However, manual testing was used to verify functionality and performance during active gameplay.

Lighthouse testing was also performed for the 404 page: 

<div align="center">
<img src="/assets/documentation/lighthouse-404.png" width="500">
</div>

### Browser Testing
The following browsers were used during testing:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Apple Safari

Verified consistent functionality across browsers
Minor issue found in Safari where emojis were not displayed

### Code Validation

All code was validated to ensure it follows best practices and does not contain errors.

- HTML: 
Validated using the [W3C markup validator](https://validator.w3.org). 
No errors were found.

- CSS 
Validated using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
No errors were found.

- JavaScript tested using [JShint](https://jshint.com). 

Initial warnings were related to ES6 syntax. After specifying ES6 usage, the code passed without any warnings or errors.

### Bugs & Fixes

### cardsArray
During development, an issue occurred where the game board failed to render correctly. 
This was caused by attempting to use the cardsArray variable in the global scope before it had been defined. Since the card data is fetched asynchronously from a JSON file, the rendering logic was executed before the data was available, resulting in a ReferenceError and an empty or broken game board.

To resolve this, the card rendering logic was moved into a dedicated function: renderGameBoard(cardsArray).
This function accepts an array of card data and is only called after the fetch request has successfully completed.

As part of this solution:

- The game board is cleared before rendering (innerHTML = "") to prevent duplicate elements
- Each card is dynamically created with its front and back structure
- Event listeners are attached to enable the flip functionality
- A shuffled array of cards can be passed in, making the function reusable for restarting the game or adding future features such as difficulty levels

This approach ensures that the game board is only populated when valid data is available, resolving both the undefined variable error and the issue of cards not rendering correctly.

### Score UI Not Resetting
During testing, an issue was identified where the score color did not reset when starting a new game. 
Although the score value was correctly reset to 100, the text remained styled as a “low score” (red) if the previous game ended with a low score.

- Cause:
The score styling was controlled by a CSS class (low-score) that was applied when the score dropped below a certain threshold:

scoreEl.classList.toggle("low-score", score < 50);

However, when resetting the game, only the score value (score = 100) was updated. 
The CSS class was not removed, causing a mismatch between the game state and the UI.

- Solution:
To fix this, both the data and UI needed to be reset together. 
A dedicated function, updateScoreUI(), was introduced to handle all score-related UI updates in one place.

This function:
- Updates the score text
- Removes any existing score-related classes
- Applies the correct class based on the current score

It is now called whenever the score changes and when the game is reset (e.g. in resetGameData()), 
ensuring that the UI always reflects the correct state.

- Key Takeaway:

Updating application state (e.g. score = 100) does not automatically update the UI. Visual changes, such as CSS classes, must be handled explicitly.

By centralizing UI logic in a single function, the code becomes:
- Easier to maintain
- Less error-prone
- More scalable for future features (e.g. additional score levels or styles)

This bug highlighted the importance of keeping related UI logic in one place to ensure consistency between data and presentation.

### Shuffle Logic for Cards
During development, an issue was noticed with the card shuffle logic. Initially, the deck was shuffled using a simple Math.random() - 0.5 approach:

```
function shuffleCards(cardArray) {
  const doubled = [...cardArray, ...cardArray]; // create pairs
  return doubled.sort(() => Math.random() - 0.5);
}
```

#### Problem: 

While this technically randomizes the array, it often placed identical cards next to each other. 
In a small deck (16 cards → 8 pairs), this made it easy for players to spot patterns, especially when playing multiple times in a row. 
The game didn’t feel fully random or challenging.

- Improvement – Fisher–Yates Shuffle: 

To improve the shuffle logic, I explored the Fisher–Yates algorithm through this [tutorial.](https://dev.to/tanvir_azad/fisher-yates-shuffle-the-right-way-to-randomize-an-array-4d2p) To better understand the underlying logic, I also used ChatGPT as a support tool, focusing on conceptual explanations rather than direct code:

<div align="center">
<img src="/assets/documentation/chatgpt-question.png" width="400">
</div>

<div align="center">
<img src="/assets/documentation/chatgpt-answer.png" width="400">
</div>

Using this approach, Fisher–Yates was implemented:

```
function shuffleCards(cardArray) {
  const doubled = [...cardArray, ...cardArray];
  for (let i = doubled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doubled[i], doubled[j]] = [doubled[j], doubled[i]];
  }
  return doubled;
}
```

This significantly improved the randomness, but identical cards could still occasionally end up next to each other.

- Final Solution – Split, Shuffle, and Interleave

To further improve the distribution, a multi-step approach was implemented:
1. Split the deck into two halves: Each half contains one copy of every card
3. Shuffle each half independently Using the Fisher–Yates algorithm
5. Interleave the halves: Alternating cards from each half to reduce the chance of adjacent pairs
7. Optional fine-tuning: A final pass swaps cards if any identical pairs still end up next to each other (rare case)

This ensures that matching cards are distributed more evenly across the board.

Result: 
- Improved randomness and distribution
- Reduced predictable patterns
- More engaging gameplay, especially over multiple rounds

This final approach creates a more balanced and enjoyable experience where players cannot easily predict card positions.

---

## Known Bugs

Minor responsiveness inconsistencies in the game board layout (spacing and grid scaling across certain breakpoints).
The functionality remains intact, but the visual layout could be improved for a more seamless experience across all screen sizes.
This has been identified during responsive testing and is planned to be fixed in a future update.

---

## Credits

### Code

### Content
