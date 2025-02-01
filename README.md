## BharatFD API (Node.js + Express)

### Overview

This is a backend API for managing application functionalities using Node.js, Express.js, MongoDB, and Redis. The API provides structured endpoints for seamless interaction.

## Tech Stack

Node.js (Backend)

Express.js (Framework)

MongoDB (Database with Mongoose ORM)

Redis (Caching for better performance)

Docker (Containerization & Deployment)

Mocha & Chai (Testing)

## Features

✅ Structured API routes with controllers and models.

✅ Redis caching for optimized performance.

✅ REST API with standard GET, POST, PUT and DELETE endpoints.

✅ Docker support for easy deployment.

✅ Unit testing with Mocha & Chai.

✅ Follows best Git practices.

## Project Structure

BharatFD/

│-- Controllers/faqController.js               # Business logic controllers

│-- models/FAQ.js                           # Mongoose models

│-- routes/faqRoutes.js                       # Express routes

│-- test/faqtest.js                         # Test cases with Mocha & Chai

│-- utils/translate.js                        # Utility functions

│-- server.js                             # Main Express application

│-- .env                                   # Environment variables

│-- docker-compose.yml                       # Docker services

│-- package.json                           # Project metadata and dependencies

│-- README.md                                # API Documentation


## Installation

Ensure you have the following installed:

Node.js

MongoDB

Redis

Docker (optional for containerized deployment)

## Setup Project

git clone https://github.com/Himanshu5206/BHARATFD.git

cd BharatFD

npm install

npm run dev

## Configure Environment Variables

Create a .env file in the root directory and configure:

PORT=8000

MONGO_URI=mongodb://localhost:27017/bharatfd

REDIS_URL=redis://127.0.0.1:6379

## API Endpoints
1️⃣ Create FAQ (POST)

POST /api/faqs/

📤 Request Body (JSON)

{
  
  "question": "What is Node.js?",
  
  "answer": "Node.js is a JavaScript runtime."

}

📥 Response
{
  
  "question": "What is Node.js?",
  
  "question_hi": "नोड.जेएस क्या है?",
  
  "question_bn": "নোড.জেএস কি?",
  
  "answer": "Node.js is a JavaScript runtime."

}


## 📖 Git Best Practices

Use meaningful commit messages:

git commit -m "feat: Add resource API endpoint"

git commit -m "fix: Improve caching mechanism"

git commit -m "docs: Update README with API examples"


