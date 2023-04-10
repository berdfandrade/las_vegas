# Las Vegas

## Objective
Jackpot! You've landed a summer gig in Las Vegas! Unfortunately, it's 2022, and the casinos are closed due to COVID-19. Your boss wants to move some of the business online and asks you to build a fullstack app — a simple slot machine game, with a little twist. Build it to ensure that the house always wins!

## Brief
When a player starts a game/session, they are allocated 10 credits. Pulling the machine lever (rolling the slots) costs 1 credit. The game screen has 1 row with 3 blocks. For player to win the roll, they have to get the same symbol in each block. There are 4 possible symbols: cherry (10 credits reward), lemon (20 credits reward), orange (30 credits reward), and watermelon (40 credits reward). The game (session) state has to be kept on server. If the player keeps winning, they can play forever, but the house has something to say about that... There is CASH OUT button on the screen - bonus if you implement the twist.

## Tasks
Create a design document in DESIGN.md
Include API endpoints with request / response payloads
Include UI components that you will make
Create a plan as if you were going to share with a team to execute.
I would rather see this doc complete than a working app.
Create the basic endpoints
Write tests for your business logic / API
Create the basic UI
Write tests for your UI
Requirements
A New player has 10 credits to start.
Spinning the slots cost 1 credit.
There are 4 possible symbols: cherry (10 credits reward), lemon (20 credits reward), orange (30 credits reward), and watermelon (40 credits reward).
The game (session) state has to be kept on server.
If the player keeps winning, they can play forever
When a user opens the app, a session is created on the server, and they have 10 starting credits.
When a user has less than 40 credits in the w winning roll, before communicating back to client, the server does one 30% chance roll which decides if server will re-roll the that spin.
If that roll is true, then server re-rolls and communicates the new result back.
If user has above 60 credits, the server acts the same, but in this case the chance of re-rolling the round increases to 60%.
If that roll is true, then server re-rolls and communicates the new result back.
There is a cash-out endpoint which moves credits from the game session to user's account and closes the session.
There should be a counter for how many times the computer has cheated.
There should be a button to start the game.
There should be a display of the current credits for the user.
The game should have 3 characters displayed in a row.
The components for each sign can be a starting letter (C for cherry, L for lemon, O for orange, W for watermelon).
There should be a button to "spin" the characters components.
After submitting a roll-request to server, all blocks should enter a spinning state (can be 'X' character spinning, but bonus points for getting spinner SVG from the internet).
After receiving response from server, the first sign should spin for 1 second more and then display the result, then display the second sign at 2 seconds, then the third sign at 3 seconds.
If the user wins the round, their session credit is increased by the amount from the server response, else it is deducted by 1.
Include a button on the screen that says "CASH OUT"
BONUS: when the user hovers it, there is 50% chance that button moves in a random direction by 300px, and 40% chance that it becomes unclickable (this roll should be done on client side). If they succeed to hit it, credits from session are moved to their account.
Evaluation Criteria
Node best practices
Design: A well thought out API and UI components that can be communicated with others.
Correctness: does the solution perform in sensible, thought-out ways?
Maintainability: is the code written in a clean, maintainable way?
BONUD - Testing: was the system adequately tested?
CodeSubmit
Please organize, design, test and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The Piiq Technologies Team