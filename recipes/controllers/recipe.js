const { estimatedDocumentCount } = require('../models/recipe');
const Movie = require('../models/recipe');

module.exports = {
  create,
  delete: deleteRecipe,
  edit,
  add: addRecipe

};



function deleteRecipes(req, res, next) {
  Recipe.findByIdAndDelete(req.params.id, function (err) {
    res.redirect("/recipes");
  });
}
  
  Recipes.findOne({'recipes._id': req.params.id}).then(function(recipe) {
    const recipe = recipes.recipe.id(req.params.id);
    if (!review.user.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`);
    recipe.remove();
    recipe.save().then(function() {
      res.redirect(`/recipes/${recipe._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });


function create(req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    recipe.reviews.push(req.body);
    recipe.save(function(err) {
      res.redirect(`/recipes/${recipe._id}`);
    });
  });
}

function edit(req, res) {
  const arguments = {
    _id: req.params.id,
    owner: req.user._id,
  };
  Recipe.findOne(req.params.id, function (err, recipe) {
    res.render("recipe/edit", {
      title: "Change",
      recipe,
    });
  });
}

function addRecipe(req, res) {
  res.render("recipes/add", { title: "Add to Cookbook" });
}