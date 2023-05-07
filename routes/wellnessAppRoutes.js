const express = require('express');
const router = express.Router();
const controller = require('../controllers/wellnessAppControllers');

router.get("/showAllNutritionGoals_page", controller.showAllNutritionGoals_page);
router.get("/showAllFitnessGoals_page", controller.showAllFitnessGoals_page);
router.get("/showAllHealthyLifestyleGoals_page", controller.showAllHealthyLifestyleGoals_page);
router.get("/showAllNutritionAchievements_page", controller.showAllNutritionAchievements_page);
router.get("/showAllFitnessAchievements_page", controller.showAllFitnessAchievements_page);
router.get("/showAllHealthyLifestyleAchievements_page", controller.showAllHealthyLifestyleAchievements_page);
router.post("/addNutritionGoal_route", controller.addNutritionGoal_route);
router.post("/addFitnessGoal_route", controller.addFitnessGoal_route);
router.post("/addHealthyLifestyleGoal_route", controller.addHealthyLifestyleGoal_route);
router.post("/addFitnessAchievement_route", controller.addFitnessAchievement_route);
router.post("/addhealthyLifestyleAchievement_route", controller.addhealthyLifestyleAchievement_route);
router.post("/addNutritionAchievement_route", controller.addNutritionAchievement_route);
router.post("/deleteNutritionGoals_route", controller.deleteNutritionGoals_route);
router.post("/deleteFitnessGoals_route", controller.deleteFitnessGoals_route);
router.post("/deleteHealthyLifestyleGoals_route", controller.deleteHealthyLifestyleGoals_route);
router.post("/updateNutritionGoal_route", controller.updateNutritionGoal_route);
router.post("/updateFitnessGoal_route", controller.updateFitnessGoal_route);
router.post("/updateHealthyLifestyleGoal_route", controller.updateHealthyLifestyleGoal_route);
router.get("/", controller.landing_page);
router.get("/login", controller.login);
router.get("/register", controller.register);
router.get("/aboutUs", controller.aboutUs);




/*
router.get("/nutrition", controller.nutrition_page);
router.get("/fitness", controller.fitness_page);
router.get("/healthy_lifestyle", controller.healthy_lifestyle_page);
router.get("/aboutUs", controller.aboutUs_page);
router.get("/dashboard", controller.dashboard_page);
*/
module.exports = router;
