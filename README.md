# G Message

## About
This project is a demonstration of a simple real-time messaging app. The main technologies used are React, Node, Socket.IO, and Typescript. Features:
* Real-time messaging using [https://socket.io/](Socket.IO)
* Users can have avatars
* Users can hide messages after reading them
* Users can 
* Dependency management with [https://yarnpkg.com/](yarn)
* Linting with [https://github.com/google/gts](Google GTS)
* UI Components from [https://ant.design/](Ant Design)
* Default React configuration from [https://create-react-app.dev/](Create React App)

## How to Run Locally
To run this project locally in development/demo mode, you will need to run the server and one or more clients. You can do this by opening multiple bash terminal tabs, for example. This project uses [https://yarnpkg.com/](yarn) for package management and scripting, so you may want to install the yarn CLI on your machine.

### Running the Server
* Make sure you have cloned the project
* Navigate to the `server` directory inside the project directory
* Run `yarn install` to install dependencies
* Run `yarn start` to compile and run the server on port 3001
* The server should log a message indicating that it is running

### Running a Client
* Make sure you have cloned the project
* Navigate to the `client` directory inside the project directory
* Run `yarn install` to install dependencies
* Run `yarn start` to run the client, but see below:
* You will probably want to run more than one client for a good demo, so pass `PORT` variable, such as `3002` or `3003`, to run the app on a specific port
* You can choose to use one of two hard-coded user profiles for demonstration by passing a `REACT_APP_PROFILE` variable with a value of `1` or `2`
* So your actual start command would be `PORT=3002 REACT_APP_PROFILE=1 yarn start`
* Run another instance of the client using a command like `PORT=3003 REACT_APP_PROFILE=2 yarn start` so the two demo users can message each other

## App Demonstration
This app uses [https://socket.io/](Socket.IO) for real-time messaging. Here are some things to try:
* Run the server and two clients.
* Open one browser window directed to each client (`http://localhost:3002` and `http://localhost:3003` for example).
* Add a message from one client's window.
* Notice how the message appears in the other client's window in real time, without requiring a page reload.
* Users can choose to hide messages after they read them - try hiding a message in one user's window. Notice how it remains in the other user's window.

## Other Available Scripts
Review the `package.json` files for the client and server to see additional scripts, such as scripts for linting, fixing linter errors, and scripting. If I were onboarding other developers for this project, I would recommend installing relevant editor plugins (such as Typescript and ESLint plugins for VSCode).

## Opportunities for More Development
* Server and clients should communicate via https, not http
* Server's CORS policy is probably too accepting
* Persist message data in a database
* Implement real user authentication and user data persistence
* Implement multiple message channels (such as `#homework` and `#general`)
* Encrypt messages end-to-end
* User management tools, like allowing a user to block or mute another user