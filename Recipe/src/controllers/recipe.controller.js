const httpStatus = require('http-status');
const { recipeService } = require('../services');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const createRecipe = catchAsync(async (req, res) => {
  req.body.user = req.user.id;
  const recipe = await recipeService.createRecipe(req.body);
  res.status(201).send(recipe);
});

const getRecipes = catchAsync(async (req, res) => {
  const recipes = await recipeService.getRecipes();
  res.send(recipes);
});

const getRecipe = catchAsync(async (req, res) => {
  const recipe = await recipeService.getRecipeById(req.params.recipeId);
  if (!recipe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
  }
  res.send(recipe);
});

const updateRecipe = catchAsync(async (req, res) => {
  // own recipe
  const recipe = await recipeService.updateRecipe({ _id: req.params.recipeId, user: req.user._id.toString() }, req.body);
  res.send(recipe);
});

const deleteRecipe = catchAsync(async (req, res) => {
  // own recipe
  await recipeService.deleteRecipe({ _id: req.params.recipeId, user: req.user._id });
  res.status(204).send();
});

module.exports = {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
};
