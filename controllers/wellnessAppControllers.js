const wellnessAppDAO = require('../models/wellnessApp');
const db = new wellnessAppDAO();


exports.entries_list = function (req, res) {
    res.send('<h1>Not yet implemented: show a list of wellness app achievements.</h1>');
    db.getAllEntries();
}

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

exports.new_entry = function (req, res) {
    res.send('<h1>Not yet implemented: show a new entry page.</h1>');
}
exports.peters_entries = function (req, res) {
    res.send('<h1>Processing Peter\'s Entries, see terminal</h1>');
    db.getPetersEntries();
}