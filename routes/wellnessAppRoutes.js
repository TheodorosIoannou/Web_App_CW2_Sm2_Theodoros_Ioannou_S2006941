const express = require('express');
const router = express.Router();
const controller = require('../controllers/wellnessAppControllers');
const { login } = require('../auth/auth')
const { verify } = require('../auth/auth')
router.get("/aboutUs", controller.aboutUs);
router.get("/", controller.aboutUs);
router.get('/login', controller.show_login_page);
router.post('/login', login, controller.handle_login);
router.get("/wellnessApp", verify, controller.show_wellnessApp)
router.get("/logout", verify, controller.logout);
router.get("/loggedIn", verify, controller.loggedIn_landing);
router.get("/wellnessApp/showAllNutritionGoals_page", controller.showAllNutritionGoals_page);
router.get("/wellnessApp/showAllFitnessGoals_page", controller.showAllFitnessGoals_page);
router.get("/wellnessApp/showAllHealthyLifestyleGoals_page", controller.showAllHealthyLifestyleGoals_page);
router.get("/wellnessApp/showAllNutritionAchievements_page", controller.showAllNutritionAchievements_page);
router.get("/wellnessApp/showAllFitnessAchievements_page", controller.showAllFitnessAchievements_page);
router.get("/wellnessApp/showAllHealthyLifestyleAchievements_page", controller.showAllHealthyLifestyleAchievements_page);
router.post("/wellnessApp/addNutritionGoal_route", controller.addNutritionGoal_route);
router.post("/wellnessApp/addFitnessGoal_route", controller.addFitnessGoal_route);
router.post("/wellnessApp/addHealthyLifestyleGoal_route", controller.addHealthyLifestyleGoal_route);
router.post("/wellnessApp/addFitnessAchievement_route", controller.addFitnessAchievement_route);
router.post("/wellnessApp/addhealthyLifestyleAchievement_route", controller.addhealthyLifestyleAchievement_route);
router.post("/wellnessApp/addNutritionAchievement_route", controller.addNutritionAchievement_route);
router.post("/wellnessApp/deleteNutritionGoals_route", controller.deleteNutritionGoals_route);
router.post("/wellnessApp/deleteFitnessGoals_route", controller.deleteFitnessGoals_route);
router.post("/wellnessApp/deleteHealthyLifestyleGoals_route", controller.deleteHealthyLifestyleGoals_route);
router.post("/wellnessApp/updateNutritionGoal_route", controller.updateNutritionGoal_route);
router.post("/wellnessApp/updateFitnessGoal_route", controller.updateFitnessGoal_route);
router.post("/wellnessApp/updateHealthyLifestyleGoal_route", controller.updateHealthyLifestyleGoal_route);
router.get("/register", controller.show_register_page);
router.post('/register', controller.post_new_user);

module.exports = router;
