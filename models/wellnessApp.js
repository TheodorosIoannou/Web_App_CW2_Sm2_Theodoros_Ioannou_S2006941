const { rejects } = require('assert');
const nedb = require('nedb');
const path = require("path");
class wellnessApp {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }
    init() {
        this.db.insert({
            subject: 'I liked the exhibition',
            contents: 'nice',
            published: '2020-02-16',
            author: 'Peter'
        });
    }
}

//creating the database for the nutrition goals
const nutritionGoalsDB = new nedb({
    filename: path.join(__dirname, 'nutritionGoals.db'),
    autoload: true,
});

//creating the database for the Nutrition Achievements
const nutritionAchievementsDB = new nedb({
    filename: path.join(__dirname, 'nutritionAchievements.db'),
    autoload: true,
});
/*
//creating the NutritionGoal model
class NutritionGoal {
    constructor(data) {
        this.id = data.id;
        this.max_kcal = data.max_kcal;
        this.start_date = data.start_date;
        this.end_date = data.end_date;
    }

    save() {
        return new Promise((resolve, reject) => {
            nutritionGoalsDB.insert(this, (err, nutritionGoal) => {
                if (err) {
                    reject(err);

                } else {
                    resolve(nutritionGoal);
                }
            });
        });
    }

    update() {
        return new Promise((resolve, reject) => {
            nutritionGoalsDB.update(
                { _id: this._id },
                { $set: { id: this.id, max_kcal: this.max_kcal, start_date: this.start_date, end_date: this.end_date } },
                {},
                (err, numReplaced) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(numReplaced);

                    }
                }
            );
        });
    }

    static delete(nutritionGoalId) {
        return new Promise((resolve, reject) => {
          nutritionGoalsDB.remove({ _id: nutritionGoalId }, {}, (err, numRemoved) => {
            if (err) {
              reject(err);
            } else {
              resolve(numRemoved);
            }
          });
        });
      }

      static getAll() {
        return new Promise((resolve, reject) => {
          nutritionGoalsDB.find({}, (err, nutritionGoals) => {
            if (err) {
              reject(err);
            } else {
              resolve(nutritionGoals);
            }
          });
        });
      }

      static getById(nutritionGoalId) {
        return new Promise((resolve, reject) => {
          nutritionGoalsDB.findOne({ _id: nutritionGoalId }, (err, nutritionGoal) => {
            if (err) {
              reject(err);
            } else {
              resolve(nutritionGoal);
            }
          });
        });
      }
    }

    // creating the NutritionAchievement model
class NutritionAchievement {
    constructor(data) {
      this.name = data.name;
    }
    save() {
        return new Promise((resolve, reject) => {
          nutritionAchievementsDB.insert(this, (err, nutritionAchievement) => {
            if (err) {
              reject(err);
            } else {
              resolve(nutritionAchievement);
            }
          });
        });

    }*/


module.exports = wellnessApp;