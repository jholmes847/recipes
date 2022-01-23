const express = require('express');
const router = express.Router();
// Require the yet to be created reviews controller
const recipeCtrl = require('../controllers/recipe');

// Define the Route to create a review
// POST /movies/:id/reviews
router.post('/recipes/:id/recipe', recipeCtrl.create);

module.exports = router;