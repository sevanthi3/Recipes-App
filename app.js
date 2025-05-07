const express = require('express');
const app = express();

// Body parser
app.use(express.json());

// Routes
app.use('/api/recipes', require('./routes/recipeRoutes'));

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Recipes API');
});

module.exports = app;
