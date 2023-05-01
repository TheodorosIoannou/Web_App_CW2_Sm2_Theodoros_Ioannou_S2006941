const express = require('express');
const router = express.Router();
const controller = require('../controllers/wellnessAppControllers');
router.get("/", controller.landing_page);
router.get("/login", controller.login_page);
router.get("/register", controller.register_page);
router.get("/nutrition", controller.nutrition_page);
router.get("/addNutritionGoal", controller.addNutritionGoal_page);

router.get("/fitness", controller.fitness_page);
router.get("/healthy_lifestyle", controller.healthy_lifestyle_page);
router.get("/aboutUs", controller.aboutUs_page);
router.get("/dashboard", controller.dashboard_page);

router.get('/new', controller.new_entry);

router.get('/peter', controller.peters_entries);
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
module.exports = router;
