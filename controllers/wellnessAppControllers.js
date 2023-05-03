const wellnessAppDAO = require('../models/wellnessAppModel');
const dbng = new wellnessAppDAO();
const dbna = new wellnessAppDAO();
const dbfg = new wellnessAppDAO();
const dbfa = new wellnessAppDAO();
const dbhg = new wellnessAppDAO();
const dbha = new wellnessAppDAO();


exports.nutritionGoals_list = function (req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    dbng.getAllEntries();
}

exports.nutritionAchievements_list = function (req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    dbna.getAllEntries();
}

exports.fitnessGoals_list = function (req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    dbfg.getAllEntries();
}

exports.fitnessAchievements_list = function (req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    dbfa.getAllEntries();
}

exports.healthyLifestyleGoals_list = function (req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    dbhg.getAllEntries();
}

exports.healthyLifestyleAchievements_list = function (req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    dbha.getAllEntries();
}




exports.landing_page = function (req, res) {
    res.render("user/aboutUs.mustache",
        {
            'title': 'Landing Page'
        }
    );
}


exports.login_page = function (req, res) {
    res.render("user/login",
        {
            'title': 'Login'
        }
    );
}

exports.register_page = function (req, res) {
    res.render("user/register.mustache",
        {
            'title': 'Register'
        }
    );
}
exports.nutrition_page = function (req, res) {
    res.render("nutrition/nutrition.mustache",
        {
            'title': 'Nutrition'
        }
    );
}

exports.addNutritionGoal_page = function (req, res) {
    res.render("nutrition/addNutritionGoal.mustache",
        {
            'title': 'Add Nutrition Goal'
        }
    );
}

exports.fitness_page = function (req, res) {
    res.render("fitness/fitness.mustache",
        {
            'title': 'Fitness'
        }
    );
}

exports.healthy_lifestyle_page = function (req, res) {
    res.render("healthy_lifestyle/healthy_lifestyle.mustache",
        {
            'title': 'Healthy Lifestyle'
        }
    );
}

exports.aboutUs_page = function (req, res) {
    res.render("user/aboutUs.mustache",
        {
            'title': 'About Us'
        }
    );
}

exports.dashboard_page = function (req, res) {
    res.render("dashboard/dashboard.mustache",
        {
            'title': 'Dashboard'
        }
    );
}

