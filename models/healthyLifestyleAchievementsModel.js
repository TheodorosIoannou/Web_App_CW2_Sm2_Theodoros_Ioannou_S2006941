const nedb = require('nedb');

class healthyLifestyleAchievementsModel {
  constructor(dbFilePath) {
    if (dbFilePath) {
      this.dbha = new nedb({ filename: dbFilePath, autoload: true });
      console.log('DB connected to ' + dbFilePath);
    } else {
      this.dbha = new nedb();
    }
  }

  //add healthyLifestyle achievement
  addhealthyLifestyleAchievement(name) {
    return new Promise((resolve, reject) => {
      this.dbha.insert({ name: name }, function (err, docs) {
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


  //show all healthyLifestyle achievements
  showAllHealthyLifestyleAchievements() {
    return new Promise((resolve, reject) => {
      this.dbha.find({}, function (err, docs) {
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
module.exports = healthyLifestyleAchievementsModel;