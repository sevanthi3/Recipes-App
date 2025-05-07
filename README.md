# Recipes API

A RESTful API for managing recipes built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete recipes
- MongoDB database integration with Mongoose
- MVC architecture

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/recipes | Get all recipes |
| GET | /api/recipes/:id | Get a single recipe by ID |
| POST | /api/recipes | Create a new recipe |
| PUT | /api/recipes/:id | Update a recipe |
| DELETE | /api/recipes/:id | Delete a recipe |

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB connection string
4. Run the server: `npm run dev`

