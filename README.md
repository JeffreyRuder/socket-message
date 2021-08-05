# G Message

## About
This project is a demonstration of a simple real-time messaging app. The main technologies used are React, Node, Socket.IO, and Typescript. Features:
* Real-time messaging using [Socket.IO](https://socket.io/)
* Users can have avatars
* Users can hide messages after reading them
* Message timestamps are displayed in relative time
* Dependency management with [yarn](https://yarnpkg.com/)
* Linting with [Google GTS](https://github.com/google/gts)
* UI Components from [Ant Design](https://ant.design/)
* Default React configuration from [Create React App](https://create-react-app.dev/)
* Unit tests with Jest and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## How to Run Locally
To run this project locally in development/demo mode, you will need to run the server and one or more clients. You can do this by opening multiple bash terminal tabs, for example. This project uses [yarn](https://yarnpkg.com/) for package management and scripting, so you may want to install the yarn CLI on your machine.

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
This app uses [Socket.IO](https://socket.io/) for real-time messaging. Here are some things to try:
* Run the server and two clients.
* Open one browser window directed to each client (`http://localhost:3002` and `http://localhost:3003` for example).
* Add a message from one client's window.
* Notice how the message appears in the other client's window in real time, without requiring a page reload.
* Users can choose to hide messages after they read them - try hiding a message in one user's window. Notice how it remains in the other user's window.

## Other Available Scripts
Review the `package.json` files for the client and server to see additional scripts, such as scripts for linting, fixing linter errors, and scripting. If I were onboarding other developers for this project, I would recommend installing relevant editor plugins (such as Typescript and ESLint plugins for VSCode).

There are some basic front-end tests in the clint code base. Navigate to the `client` directory and run `yarn test` to run them.

## Opportunities for More Development
* Server and clients should communicate via https, not http
* Server's CORS policy is probably too accepting
* Persist message data in a database
* Implement real user authentication and user data persistence
* More client, server, database configuration options
* More testing on client and server
* Setup proper deployment and deployment pipeline
* Implement multiple message channels (such as `#homework` and `#general`)
* Encrypt messages end-to-end
* User management tools, like allowing a user to block or mute another user
