This API is used for Ecommerce web site


Prerequisites & Installation
To follow the playlist, you need to install the core "MERN" backend stack.

1. Core Software
Node.js: The runtime environment. Download the LTS version from the official site.

MongoDB: You can use MongoDB Atlas (Cloud) as shown in the video for a live database.

Postman: Essential tool for testing your API endpoints (GET, POST, etc.).

2. Initialization & Packages
Open your terminal in your project folder and run the following commands:

Initialize Project: npm init -y (Creates the package.json file).

Install Dependencies:
npm install express mongoose dotenv

express: The web framework.

mongoose: To connect Node.js with MongoDB.

dotenv: To manage environment variables (like database URLs).

Install Development Tool:
npm install --save-dev nodemon

nodemon: Automatically restarts the server whenever you save code changes.

🚀 How to Run the Project
Step 1: Configuration
Create a .env file in your root directory to store your MongoDB connection string:

Plaintext
MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/api_name
PORT=5000

step 2 : Run command:
npm run dev
