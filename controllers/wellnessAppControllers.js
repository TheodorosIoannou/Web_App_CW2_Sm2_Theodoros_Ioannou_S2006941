const wellnessAppDAO = require('../models/wellnessAppModel');
const dbng = new wellnessAppDAO("");
const dbna = new wellnessAppDAO("");
const dbfg = new wellnessAppDAO("fitnessGoals");
const dbfa = new wellnessAppDAO("fitnessAchievements");
const dbhg = new wellnessAppDAO("");
const dbha = new wellnessAppDAO("healthyLifestyleAchievements");

 

exports.landing_page = function (req, res) {
    res.render("user/aboutUs.mustache",
        {
            'title': 'Landing Page'
        }
    );
}


exports.login_page = function(req, res) {
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
