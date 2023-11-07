# MERN CRUD App with User Authentication

Welcome to the MERN CRUD App, a full-stack web application that allows users to create, read, update, and delete notes. This application provides user authentication and token-based authorization to ensure secure access to the note-taking functionality.

## Features

- User registration and login: Users can create an account, log in, and log out securely.
- Token-based authentication: User sessions are managed using JSON Web Tokens (JWTs) to ensure secure access.
- Create Notes: Authenticated users can create and save notes.
- Read Notes: Users can view their saved notes.
- Update Notes: Edit and update existing notes.
- Delete Notes: Remove unwanted notes from the system.

## Technologies Used

- **MERN Stack**:
  - **M**ongoDB: A NoSQL database for storing note data.
  - **E**xpress.js: A Node.js framework for building the backend.
  - **R**eact: A JavaScript library for building the user interface.
  - **N**ode.js: A JavaScript runtime environment for the server.
- **JSON Web Tokens (JWT)**: For user authentication and authorization.
- **Axios**: For making HTTP requests from the React frontend to the Express.js backend.

## Getting Started

To run this application on your local machine, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone https://github.com/your-username/mern-crud-app.git
   cd mern-crud-app
   ```

2. **Install Dependencies**: 
   ```
   cd server
   npm install
   cd ../client
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the `server` directory and define your MongoDB connection string and a secret key for JWT token generation.

   ```
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   ```

4. **Start the backend**:
   ```
   cd backend
   npm start
   ```

5. **Start the Frontend**:
   ```
   cd frontend
   npm start
   ```

6. Open your browser and access the app at `http://localhost:3000`.

## Usage

1. **Registration and Login**: Start by creating a user account and logging in.

2. **Create Notes**: Once logged in, you can create new notes, providing a title and content.

3. **Read Notes**: View the list of your saved notes on the dashboard.

4. **Update Notes**: Click on a note to edit and update its content.

5. **Delete Notes**: Remove notes you no longer need.

6. **Logout**: Log out when you're finished.

## Deployment

To deploy this app to a production environment, you can use cloud hosting services like AWS, Heroku, or others. Ensure to set up your environment variables and database connection appropriately.

## License

This project is licensed under the MIT License. Feel free to modify and use it in your own projects.

## Acknowledgments

- Special thanks to the MERN community for the open-source tools and libraries used in this project.
- Credits to the developers and contributors to the MERN stack.
