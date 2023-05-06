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
      res.render("nutritionGoalsdata", {
        goal: docs,
      });
    });
  };

  exports.showAllFitnessGoals_page = function (req, res) {
    dbfg.showAllFitnessGoals.then((docs) => {
      res.render("fitnessGoalsdata", {
        goal: docs,
      });
    });
  };

  exports.showAllHealthyLifestyleGoals_page = function (req, res) {
    dbhg.showAllHealthyLifestyleGoals().then((docs) => {
      res.render("HealthyLifestyleGoalsdata", {
        goal: docs,
      });
    });
  };


  exports.showAllNutritionAchievements_page = function (req, res) {
    dbna.showAllNutritionAchievements().then((docs) => {
      res.render("nutritionAchievementsdata", {
        goal: docs,
      });
    });
  };

  exports.showAllFitnessAchievements_page = function (req, res) {
    dbfa.showAllfitnessAchievements.then((docs) => {
      res.render("fitnessAchievementsdata", {
        goal: docs,
      });
    });
  };

  exports.showAllHealthyLifestyleAchievements_page = function (req, res) {
    dbhg.showAllHealthyLifestyleAchievements().then((docs) => {
      res.render("HealthyLifestyleAchievementsdata", {
        goal: docs,
      });
    });
  };  

  ///////////////Add

exports.addNutritionGoal_route = function (req, res) {
  dbng.addNutritionGoal(req.body.id, req.body.maxKcal, req.body.stardDate, req.body.endDate).then((docs) => {
    res.render("nutrionGoalChange", {
      change: " added to database",
      employee: docs,
    });
  });
};

exports.addFitnessGoal_route = function (req, res) {
    dbfg.addFitnessGoal(req.body.id, req.body.exercisename, req.body.stardDate, req.body.endDate).then((docs) => {
      res.render("fitnessGoalChange", {
        change: " added to database",
        employee: docs,
      });
    });
  };
  
  exports.addHealthyLifestyleGoal_route = function (req, res) {
    dbhg.addHealthyLifestyleGoal(req.body.id, req.body.hoursofsleep, req.body.stardDate, req.body.endDate).then((docs) => {
      res.render("HealthyLifestyleGoalChange", {
        change: " added to database",
        employee: docs,
      });
    });
  };
  
  exports.addFitnessAchievement_route = function (req, res) {
    dbfa.addfitnessAchievement(req.body.name).then((docs) => {
      res.render("fitnessAchievementChange", {
        change: " added to database",
        employee: docs,
      });
    });
  };

  exports.addhealthyLifestyleAchievement_route = function (req, res) {
    dbha.addhealthyLifestyleAchievement(req.body.name).then((docs) => {
      res.render("healthyLifestyleAchievementChange", {
        change: " added to database",
        employee: docs,
      });
    });
  };
  
  exports.addNutritionAchievement_route = function (req, res) {
    dbfa.addNutritionAchievement(req.body.name).then((docs) => {
      res.render("NutritionAchievementChange", {
        change: " added to database",
        employee: docs,
      });
    });
  };
//////////////Delete
exports.deleteNutritionGoals_route = function (req, res) {
    let id = req.body.id;
    dbng.deleteNutritionGoals(id).then((docs) => {
      res.render("nutrionGoalChange", {
        change: " added to database",
        employee: docs,
      });
    });
  };
  
  exports.deleteFitnessGoals_route = function (req, res) {
    let id = req.body.id;
      dbfg.deleteFitnessGoals(id).then((docs) => {
        res.render("fitnessGoalChange", {
          change: " added to database",
          employee: docs,
        });
      });
    };
    
    exports.deleteHealthyLifestyleGoals_route = function (req, res) {
        let id = req.body.id;
      dbhg.deleteHealthyLifestyleGoals(id).then((docs) => {
        res.render("HealthyLifestyleGoalChange", {
          change: " added to database",
          employee: docs,
        });
      });
    };

    /////update

exports.updateNutritionGoal_route = function (req, res) {
  let id = req.body.id;
  let maxKcal = req.body.maxKcal;
  let stardDate = req.body.stardDate;
  let endDate = req.body.endDate;
  dbng.updateNutritionGoal(id, maxKcal, stardDate, endDate)
    .then((docs) => {
      res.render("nutritionGoalChange", {
        title:"UpdatesNutritionGoal",
        change: "nutrition goal updated",
        employees: docs,
      });
    })
    .catch((err) => {
      console.log("Error: ");
      console.log(JSON.stringify(err));
    });
};

exports.updateFitnessGoal_route = function (req, res) {
    let id = req.body.id;
    let maxKcal = req.body.maxKcal;
    let reps = req.body.reps;
    let sets = req.body.sets;
    let stardDate = req.body.stardDate;
    let endDate = req.body.endDate;
    dbfg.updateFitnessGoal(id, maxKcal, reps , sets, stardDate, endDate)
      .then((docs) => {
        res.render("fitnessGoalChange", {
          title:"UpdatesfitnessGoal",
          change: "fitness goal updated",
          employees: docs,
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
    let stardDate = req.body.stardDate;
    let endDate = req.body.endDate;
    dbhg.updateHealthyLifestyleGoal(id, hoursofsleep, stardDate, endDate)
      .then((docs) => {
        res.render("HealthyLifestyleGoalChange", {
          title:"UpdatesHealthyLifestyleGoal",
          change: "HealthyLifestyle goal updated",
          employees: docs,
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
