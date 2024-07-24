const { Router } = require('express');
const auth = require('../../middlewares/auth');

const { recipeController } = require('../../controllers');

const router = Router();

router.route('/create').post(auth(), recipeController.createRecipe);
router.route('/getAll').get(recipeController.getRecipes);
router.route('/getOne/:recipeId').get(recipeController.getRecipe);
router.route('/update/:recipeId').put(auth(), recipeController.updateRecipe);
router.route('/delete/:recipeId').delete(auth(), recipeController.deleteRecipe);

module.exports = router;
