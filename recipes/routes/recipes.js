var express = require('express');
var router = express.Router();

var recipesCtrl = require('../controllers/recipes');
var recipesRouter = require('./routes/recipes');

router.get("/", isLoggedIn, recipeCtrl.index);
router.get("/new", isLoggedIn, recipeCtrl.new);
router.post("/:id/comments", isLoggedIn, recipeCtrl.createComment);
router.get("/:id/edit", isLoggedIn, recipeCtrl.edit);
router.post("/:id", isLoggedIn, recipeCtrl.update);
router.delete("/:id", isLoggedIn, recipeCtrl.delete);
router.get("/:id", recipeCtrl.show);
router.post("/", isLoggedIn, recipeCtrl.create);

module.exports = router;
