const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Recipe title is required'],
    trim: true
  },
  ingredients: {
    type: [String],
    required: [true, 'Ingredients are required']
  },
  instructions: {
    type: String,
    required: [true, 'Instructions are required']
  },
  cookingTime: {
    type: Number,
    required: [true, 'Cooking time is required']
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  servings: {
    type: Number,
    required: [true, 'Number of servings is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);

