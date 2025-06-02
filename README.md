About the project:
A full-stack Notes App built with the MERN stack (MongoDB, Express, React, Node.js). Users can register, log in, and manage their personal notes securely. Features include create, read, update, delete (CRUD) operations with authentication and alert messages.
Built with:
React
Node.js
Express.js
MongoDB
Bootstrap CSS


 Features:
🔐 User Authentication (JWT-based)

📄 CRUD Operations for Notes

📬 Context API for State Management

⚠️ Alert Messages for User Feedback

🔍 Responsive & Clean UI

✅ Protected Routes for Authenticated Users


Tech Stack: 
1. Frontend:
React.js

React Router

Context API

Bootstrap / Custom CSS

2. Backend:
Node.js

Express.js

MongoDB with Mongoose

JWT for Authentication

dotenv for Environment Variables

bcryptjs for Password Hashing

⚙️ Installation:
Prerequisites:
Node.js

MongoDB

npm / yarn

Clone the Repository:
Copy code
git clone https://github.com/your-username/mern-notes-app.git

Backend Setup:
Copy code
cd task-backend
npm install

Create a .env file in the server directory:
env
Copy code
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key

Start the backend server:
Copy code
npm run

Frontend Setup
Copy code
cd task-front
npm install
npm run dev

Usage:
Register a new account.

Log in with your credentials.

Create, update, and delete your notes.

Log out securely.

