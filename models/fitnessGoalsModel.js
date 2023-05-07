const nedb = require('nedb');

class fitnessGoalsModel {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.dbfg = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.dbfg = new nedb();
        }
    }

    //add Fitness Goal
    addFitnessGoal(id, exercisename, reps, sets, startDate, endDate) {
        return new Promise((resolve, reject) => {
          this.dbfg.insert({ id: id, exercisename: exercisename, reps: reps, sets: sets, startDate: startDate, endDate: endDate} , function (err, docs) {
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

    //update Fitness Goal
    updateFitnessGoal(id, exercisename, reps, sets, startDate, endDate) {
        return new Promise((resolve, reject) => {
            this.dbfg.update(
                { id: id },
                { $set: { exercisename: exercisename, reps: reps, sets: sets, startDate: startDate, endDate: endDate } },
                {},
                function (err, docs) {
                    if (err) {
                        reject(err);
                        console.log("error updating documents", err);
                    } else {
                        resolve(docs);
                        console.log(docs, "documents updated");
                    }
                }
            );
        });
    }


    //delete Fitness Goal
    deleteFitnessGoals(id) {
        return new Promise((resolve, reject) => {
            this.dbfg.remove({ id: id }, {}, function (err, docs) {
                if (err) {
                    reject(err);
                    console.log("error deleting document");
                } else {
                    resolve(docs);
                    console.log(docs, "document removed from database");
                }
            });
        });
    }


    //show Fitness Goal
    showAllFitnessGoals() {
        return new Promise((resolve, reject) => {
            this.dbfg.find({}, function (err, docs) {
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
module.exports = fitnessGoalsModel;