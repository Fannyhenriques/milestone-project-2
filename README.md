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

<img src="/assets/documentation/wireframe-desktop.png"> 
<img src="/assets/documentation/wireframe-tablet.png"> 
<img src="/assets/documentation/wireframe-mobile.png">

The layout is structured to guide the user through the game in a clear and intuitive way.
- A header contains the game title, logo, and access to the rules
- The start screen allows the user to enter their name before beginning the game
- The game board is centered on the page to maintain focus
- Game information such as moves, misses, and score is displayed clearly below the board
- An end screen appears after the game finishes, showing the result and options to restart or start a new game

### Colour Scheme


### Typography


### Responsive Design

 

---

## Features

### Current Features

#### Game Mechanics


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
