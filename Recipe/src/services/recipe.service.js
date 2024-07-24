const httpStatus = require('http-status');
const Recipe = require('../models/recipe.model');
const ApiError = require('../utils/ApiError');

const createRecipe = async (recipeBody) => {
  return Recipe.create(recipeBody);
};

// get all recipes
const getRecipes = async () => {
  return Recipe.find();
};

// get recipe by id
const getRecipeById = async (id) => {
  return Recipe.findById(id);
};

const getRecipe = async (filter) => {
  return Recipe.findOne(filter);
};

const updateRecipe = async (filter, updateBody) => {
  const recipe = await Recipe.findOne(filter);
  if (!recipe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recipe not found');
  }

  await Recipe.updateOne(filter, updateBody);
  return await Recipe.findOne(filter);
};

const deleteRecipe = async (filter) => {
  const recipe = await Recipe.findOne(filter);
  if (!recipe) {
    throw new ApiErrorr(httpStatus.NOT_FOUND, 'Recipe not found');
  }
  await recipe.remove();
  return recipe;
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
