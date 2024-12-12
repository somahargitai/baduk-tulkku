# Baduk Tulkku

## Project description

I want to build a simple website where I can play the well-known board game baduk / go with my friends. I am a Javascript developer, so I can manage setting up the environments and writing the code. I want to use only free tools as this website will never have more than 20 users.

### Technical expectations

```bash
npm install
```

I expect the backend to be simple, so it can be managed by some tool like supabase or firebase. The frontend should be react or react-based. Tailwind CSS can be used for the styles. To create the board and the stones we may need other packages. You should propose some libraries and solutions to have a simple, straightforward solution. The backend can be node js based like express or any solution which makes the process simple
When playing, the frontend should be informed about the current state of the game. For this one there should be a websocket connection between the two players.

### Requirements

- authentication for the admin and the users
- navigation bar for all views with controls based on the profile type
- admin profile. The admin cannot play, it is for administration only. All the new registrations show up in the admin profile's main page and the admin can approve them or not. It should be organized as a table, one line for one user registration and  approve / deny buttons in the last column. In the navigation bar
- user profile. The user can log in. If there is an ongoing game, we should see the board in the main page and play. If it is the user's turn, it can put its next stone on the board or pass. There is also a button to give up the game.
If there is no running game, the user can choose another user to play with and start the game. For this one there is a text field the user can type the name of the other user. The dropdown intelligently suggests the names of the users. After choosing the user name from the dropdown, the start game button is enabled.
In the navigation bar there is a user profile button which directs to the user profile page. The user can upload profile picture, set its name, change its email.
- Landing page. There is Welcome message and a login form with email and password. In the top right corner there is a register button.
- Register page. A new user can registrate with email or with google authentication. Then he gets redirected a "thank you for registering" page which has a button /to login and a message that the admin will approve the registration soon.
- Waiting for approval page. If the user logs in but the registration is not approved yet, he gets redirected to this page.

### Game

- the two users follow the same rules as in the original game
- When one user puts a stone on the board, the user cannot put another stone until the other player has put its stone. The other user should be informed about the current state of the game.
- The game should be saved in the database and the users can continue the game later.
- In the database we store if the game is finished or not.
- Even after finishing the game, the gameplay is stored in the database.
- The users can see the history of the games in their profile.
- As the rules define it, the game should recognize when a player's stones are captured. Then in an animated way the stones are removed from the board.
- If a player gives up, the other player wins and the exit button should be shown.
- If a player passes, the other player can put its stone on the board.
- If a player passes and the other player also passes, the game is finished.
- If a the game is finished, the game should evaluate the result of the game and store it in the database.
- If a game is finished, an exit button is shown, so the users can exit the game.
- If a user disconnects, the game is not finished. The other player should be informed that the other player disconnected.
- If the disconnected player reconnects, the other player should be informed about the reconnection.
- A game is closed when the game is finished and the exit button is clicked by at least one player.

## Details of Implementation

This Baduk/Go gaming platform will be built using modern web technologies with a focus on simplicity and maintainability. Here's the high-level architecture:

### Frontend

- React with Next.js for the UI framework
- Tailwind CSS for styling
- Socket.io client for real-time game updates
- React Query for state management and API calls
- Firebase Authentication for user management

### Backend

- Firebase for authentication and database
- Node.js with Express for game logic server
- Socket.io for real-time communication
- Firebase Realtime Database for game state persistence

### Game Board Implementation

- Custom React components for the board and stones
- SVG-based rendering for smooth graphics
- Socket.io for real-time game state updates

## Step-by-Step Implementation Guide

### 1. Project Setup (Week 1)

1. Initialize Next.js project with TypeScript
2. Set up Firebase project and configuration
3. Configure Tailwind CSS
4. Set up development environment and Git repository
5. Create basic project structure

### 2. Authentication System (Week 1-2)

1. Implement Firebase Authentication
2. Create login page with email and Google auth
3. Build registration flow
4. Develop admin approval system
5. Set up protected routes
6. Create waiting for approval page

### 3. User Management (Week 2)

1. Build user profile pages
2. Implement profile picture upload
3. Create admin dashboard
4. Develop user approval interface
5. Set up user search functionality

### 4. Game Board Development (Week 3-4)

1. Create board component with SVG
2. Implement stone placement logic
3. Add game rules validation
4. Build capture detection system
5. Create animation system for stone removal
6. Implement game state management

### 5. Game Flow Implementation (Week 4-5)

1. Set up Socket.io server
2. Implement real-time game updates
3. Create game invitation system
4. Build turn management
5. Implement pass/resign functionality
6. Add game end detection
7. Create score calculation system

### 6. Game History and Storage (Week 5)

1. Design database schema for game storage
2. Implement game history recording
3. Create game replay functionality
4. Build user statistics system
5. Add game export capability

### 7. User Interface Polish (Week 6)

1. Design and implement navigation bar
2. Create responsive layouts
3. Add loading states and error handling
4. Implement notifications system
5. Add game status indicators

### 8. Testing and Deployment (Week 6-7)

1. Write unit tests for game logic
2. Implement integration tests
3. Perform user acceptance testing
4. Set up CI/CD pipeline
5. Deploy to production environment

## Technical Specifications

### Database Schema
