# A Node.js Task Manager API System

## Description
This **Node.js** project develops a **REST API** for managing ToDo tasks. The API provides endpoints to Create, Read, Update, and Delete tasks, storing the task information in a **MongoDB** database using the **Mongoose** framework to streamline communication between the application logic and the database.

Additionally, the project incorporates a **JWT**-based authentication system and makes use of middleware. While some endpoints are publicly accessible, others require authentication with a registered account.

## How to run
- confgure a new MongoDB database and set the environment variables for connection (.env file at app root level)
- set a .env file at app root level and populate with required environment variables
- open a terminal and navigate to the app root directory
- run the "npm install" command
- run the "npm start" command (or "npm run dev")
- use a HTTP client to make API requests (ex.: Postman)

## Disclaimer
*_This is just a playground project_
