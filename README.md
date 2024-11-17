# Simple API that handles users data

This is a simple REST API coded in JavaScript with Node.js and Express. It handles user data and provides endpoints to get, add, update, and delete users.

## Endpoints

- **GET /**: Returns the list of users.
- **POST /**: Adds a new user. Requires `firstName` and `lastName` in the request body.
- **PUT /:id**: Updates an existing user. Requires `firstName` and/or `lastName` in the request body.
- **DELETE /:id**: Deletes a user by ID.

## How to Test

1. **Install Dependencies**:
   ```sh
   npm install
   ```
2. **Start the server**:
   ```sh
   npm start
   ```
3. **Test with Postman**:
   - Use Postman to send requests to the API endpoints.
   - Example: To add a new user, send a POST request to http://localhost:3000/ with a JSON body containing firstName and lastName.

## Dependencies
   -  **express**: Web framework for Node.js
   -  **nodemon**: Tool for automatically restarting the server during development

## Development
This API is coded in JavaScript with Node.js and uses Express for handling HTTP requests. Nodemon is used for automatically restarting the server during development.