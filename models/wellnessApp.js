/* const nedb = require('nedb');
class wellnessApp {
  constructor(dbFilePath) {
    if (dbFilePath) {
      this.db = new nedb({ filename: dbFilePath, autoload: true });
      console.log('DB connected to ' + dbFilePath);
    } else {
      this.db = new nedb();
    }
  }
  
  


addNutritionGoal(id, maxKcal, stardDate, endDate) {
  var goal = {
    id: id,
    maxKcal: maxKcal,
    stardDate: stardDate,
    endDate: endDate,
  }
  console.log('goal created', goal);
  this.db.insert(goal, function (err, doc) {
    if (err) {
      console.log('Error inserting document', subject);
    } else {
      console.log('document inserted into the database', doc);
    }
  })
}


}

module.exports = wellnessApp;*/