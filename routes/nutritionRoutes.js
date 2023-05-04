const express = require('express');
const nutritionrouter = express.Router();
const nutritioncontroller = require('../controllers/nutritionController.js');
router.get("/nutrition", nutritioncontroller.nutrition_page);
router.get("/addNutritionGoals", nutritioncontroller.addNutritionGoals_page);
router.get("/updateNutritionGoals", nutritioncontroller.updateNutritionGoals_page);
router.get("/deleteNutritionGoals", nutritioncontroller.deleteNutritionGoals_page);
router.get("/showAllNutritionGoals", nutritioncontroller.showAllNutritionGoals_page);
router.get("/addNutritionAchievement", nutritioncontroller.addNutritionAchievement_page);
router.get("/showAllNutritionAchievements", nutritioncontroller.showAllNutritionAchievements_page);


router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})
router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})
module.exports = nutritionrouter;