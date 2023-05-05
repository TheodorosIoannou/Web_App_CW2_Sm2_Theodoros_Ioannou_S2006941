const nedb = require('nedb');

class fitnessAchievementsModel {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.dbfa = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.dbfa = new nedb();
        }
    }

    //add fitness achievement
    addfitnessAchievement(name) {
        return new Promise((resolve, reject) => {
          this.dbfa.insert({ name: name }, function (err, docs) {
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

    
    //show all fitness achievements
    showAllfitnessAchievements() {
        return new Promise((resolve, reject) => {
            this.dbfa.find({}, function (err, docs) {
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
module.exports = fitnessAchievementsModel;