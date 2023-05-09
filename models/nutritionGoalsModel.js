const nedb = require('nedb');

class nutritionGoalsModel {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.dbng = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.dbng = new nedb();
        }
    }

    //add nutrition Goal
    addNutritionGoal(id, maxkcal, startDate, endDate) {
        return new Promise((resolve, reject) => {
            this.dbng.insert({ id: id, maxkcal: maxkcal, startDate: startDate, endDate: endDate }, function (err, docs) {
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


    //update nutrition Goal
    updateNutritionGoal(id, maxkcal, startDate, endDate) {
        return new Promise((resolve, reject) => {
            this.dbng.update(
                { id: id },
                { $set: { maxkcal: maxkcal, startDate: startDate, endDate: endDate } },
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


    //delete nutrition Goal
    deleteNutritionGoals(id) {
        return new Promise((resolve, reject) => {
            this.dbng.remove({ id: id }, {}, function (err, docs) {
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


    //show ALL nutrition Goals
    showAllNutritionGoals() {
        return new Promise((resolve, reject) => {
            this.dbng.find({}, function (err, docs) {
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
module.exports = nutritionGoalsModel;
