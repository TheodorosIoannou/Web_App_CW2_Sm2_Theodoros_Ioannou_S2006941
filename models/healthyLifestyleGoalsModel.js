const nedb = require('nedb');

class healthyLifestyleGoalsModel {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.dbhg = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.dbhg = new nedb();
        }
    }

    //add HealthyLifestyle Goal
    addHealthyLifestyleGoal(id, hoursofsleep, startDate, endDate) {
        return new Promise((resolve, reject) => {
            this.dbhg.insert({ id: id, hoursofsleep: hoursofsleep, startDate: startDate, endDate: endDate, }, function (err, docs) {
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

    //update healthyLifestyle Goal
    updateHealthyLifestyleGoal(id, hoursofsleep, startDate, endDate) {
        return new Promise((resolve, reject) => {
            this.dbhg.update(
                { id: id },
                { $set: { hoursofsleep: hoursofsleep, stardDate: startDate, endDate: endDate } },
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


    //delete healthyLifestyle Goal
    deleteHealthyLifestyleGoals(id) {
        return new Promise((resolve, reject) => {
            this.dbhg.remove({ id: id }, {}, function (err, docs) {
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


    //show healthyLifestyle Goal
    showAllHealthyLifestyleGoals() {
        return new Promise((resolve, reject) => {
            this.dbhg.find({}, function (err, docs) {
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
module.exports = healthyLifestyleGoalsModel;
