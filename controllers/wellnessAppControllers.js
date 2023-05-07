const healthyLifestyleGoalsModel = require('../models/healthyLifestyleGoalsModel');
const dbhg = new healthyLifestyleGoalsModel("healthyLifestyleGoals.db");

const nutritionGoalsModel = require('../models/nutritionGoalsModel');
const dbng = new nutritionGoalsModel("nutritionGoals.db");

const fitnessAchievementsModel = require('../models/fitnessAchievementsModel');
const dbfa = new fitnessAchievementsModel("fitnessAchievements.db");

const healthyLifestyleAchievementsModel = require('../models/healthyLifestyleAchievementsModel');
const dbha = new healthyLifestyleAchievementsModel("healthyLifestyleAchievements.db");

const nutritionAchievementsModel = require('../models/nutritionAchievementsModel');
const dbna = new nutritionAchievementsModel("nutritionAchievements.db");

const fitnessGoalsModel = require('../models/fitnessGoalsModel');
const dbfg = new fitnessGoalsModel("fitnessGoals.db");


////////////show all
exports.showAllNutritionGoals_page = function (req, res) {
    dbng.showAllNutritionGoals().then((docs) => {
      res.render("nutrition/nutritionGoalsData", {
        goal: docs,
      });
    });
  };

  exports.showAllFitnessGoals_page = function (req, res) {
    dbfg.showAllFitnessGoals().then((docs) => {
      res.render("fitness/fitnessGoalsData", {
        goal: docs,
      });
    });
  };

  exports.showAllHealthyLifestyleGoals_page = function (req, res) {
    dbhg.showAllHealthyLifestyleGoals().then((docs) => {
      res.render("healthyLifestyle/healthyLifestyleGoalData", {
        goal: docs,
      });
    });
  };


  exports.showAllNutritionAchievements_page = function (req, res) {
    dbna.showAllNutritionAchievements().then((docs) => {
      res.render("nutrition/nutritionAchievementData", {
        achievement: docs,
      });
    });
  };

  exports.showAllFitnessAchievements_page = function (req, res) {
    dbfa.showAllfitnessAchievements().then((docs) => {
      res.render("fitness/fitnessAchievementsData", {
        achievement: docs,
      });
    });
  };

  exports.showAllHealthyLifestyleAchievements_page = function (req, res) {
    dbha.showAllHealthyLifestyleAchievements().then((docs) => {
      res.render("healthyLifestyle/HealthyLifestyleAchievementsdata", {
        achievement: docs,
      });
    });
  };  

  ///////////////Add

exports.addNutritionGoal_route = function (req, res) {
  dbng.addNutritionGoal(req.body.id, req.body.maxkcal, req.body.startDate, req.body.endDate).then((docs) => {
    res.render("nutrition/addNutritionGoal", {
      change: " added",
      goal: docs,
    });
  });
};

exports.addFitnessGoal_route = function (req, res) {
    dbfg.addFitnessGoal(req.body.id, req.body.exercisename, req.body.reps, req.body.sets, req.body.startDate, req.body.endDate).then((docs) => {
      res.render("fitness/addFitnessGoal", {
        change: " added ",
        goal: docs,
      });
    });
  };
  
  exports.addHealthyLifestyleGoal_route = function (req, res) {
    dbhg.addHealthyLifestyleGoal(req.body.id, req.body.hoursofsleep, req.body.startDate, req.body.endDate).then((docs) => {
      res.render("healthyLifestyle/addHealthLifestyleGoal", {
        change: " added",
        goal: docs,
      });
    });
  };
  
  exports.addFitnessAchievement_route = function (req, res) {
    dbfa.addfitnessAchievement(req.body.name).then((docs) => {
      res.render("fitness/addFitnessAchievement", {
        change: " added",
        achievement: docs,
      });
    });
  };

  exports.addhealthyLifestyleAchievement_route = function (req, res) {
    dbha.addhealthyLifestyleAchievement(req.body.name).then((docs) => {
      res.render("healthyLifestyle/addHealthyLifestyleAchievement", {
        change: " added to database",
        achievement: docs,
      });
    });
  };
  
  exports.addNutritionAchievement_route = function (req, res) {
    dbna.addNutritionAchievement(req.body.name).then((docs) => {
      res.render("nutrition/addNutritionAchievement", {
        change: " added",
        achievement: docs,
      });
    });
  };
//////////////Delete
exports.deleteNutritionGoals_route = function (req, res) {
    let id = req.body.id;
    dbng.deleteNutritionGoals(id).then((docs) => {
      res.render("nutrition/deleteNutritionGoal", {
        change: " deleted",
        goal: docs,
      });
    });
  };
  
  exports.deleteFitnessGoals_route = function (req, res) {
    let id = req.body.id;
      dbfg.deleteFitnessGoals(id).then((docs) => {
        res.render("fitness/deleteFitnessGoal", {
          change: " deleted",
          goal: docs,
        });
      });
    };
    
    exports.deleteHealthyLifestyleGoals_route = function (req, res) {
        let id = req.body.id;
      dbhg.deleteHealthyLifestyleGoals(id).then((docs) => {
        res.render("healthyLifestyle/deleteHealthyLifestyleGoals", {
          change: " deleted ",
          goal: docs,
        });
      });
    };

    /////update

exports.updateNutritionGoal_route = function (req, res) {
  let id = req.body.id;
  let maxkcal = req.body.maxkcal;
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;
  dbng.updateNutritionGoal(id, maxkcal, startDate, endDate)
    .then((docs) => {
      res.render("nutrition/updateNutritionGoal", {
        change: "updated",
        goal: docs,
      });
    })
    .catch((err) => {
      console.log("Error: ");
      console.log(JSON.stringify(err));
    });
};

exports.updateFitnessGoal_route = function (req, res) {
    let id = req.body.id;
    let exercisename = req.body.exercisename;
    let reps = req.body.reps;
    let sets = req.body.sets;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;

    dbfg.updateFitnessGoal(id, exercisename, reps , sets, startDate, endDate)
      .then((docs) => {
        res.render("fitness/updateFitnessGoal", {
          change: "updated",
          goal: docs,
        });
      })
      .catch((err) => {
        console.log("Error: ");
        console.log(JSON.stringify(err));
      });
  };

  exports.updateHealthyLifestyleGoal_route = function (req, res) {
    let id = req.body.id;
    let hoursofsleep = req.body.hoursofsleep;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    dbhg.updateHealthyLifestyleGoal(id, hoursofsleep, startDate, endDate)
      .then((docs) => {
        res.render("healthyLifestyle/updateHealthyLifestyleGoal", {
          change: "updated",
          goal: docs,
        });
      })
      .catch((err) => {
        console.log("Error: ");
        console.log(JSON.stringify(err));
      });
  };
  



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

exports.aboutUs_page = function (req, res) {
    res.render("user/aboutUs.mustache",
        {
            'title': 'About Us'
        }
    );
}



/*exports.nutrition_page = function (req, res) {
    res.render("nutrition/nutrition.mustache",
        {
            'title': 'Nutrition'
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



exports.dashboard_page = function (req, res) {
    res.render("dashboard/dashboard.mustache",
        {
            'title': 'Dashboard'
        }
    );
}*/
