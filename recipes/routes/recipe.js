const express = require('express');
const router = express.Router();
const recipeCtrl = require('../controllers/recipe');

router.post('/recipes/:id/recipe', recipeCtrl.create);

module.exports = router;