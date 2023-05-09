const nedb = require('nedb');

class nutritionAchievementsModel {
  constructor(dbFilePath) {
    if (dbFilePath) {
      this.dbna = new nedb({ filename: dbFilePath, autoload: true });
      console.log('DB connected to ' + dbFilePath);
    } else {
      this.dbna = new nedb();
    }
  }

  //add nutrition achievement
  addNutritionAchievement(name) {
    return new Promise((resolve, reject) => {
      this.dbna.insert({ name: name }, function (err, docs) {
        if (err) {
          reject(err);
          console.log("error", err);
        } else {
          resolve(docs);
          console.log("document inserted", docs);
        }
      });
    });
  }


  //show nutrition Goal
  showAllNutritionAchievements() {
    return new Promise((resolve, reject) => {
      this.dbna.find({}, function (err, docs) {
        if (err) {
          reject(err);
          console.log("error");
        } else {
          resolve(docs);
          console.log(docs, "deleted");
        }
      });
    });
  }


}
module.exports = nutritionAchievementsModel;
