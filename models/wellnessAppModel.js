const nedb = require('nedb');
class wellnessAppModel {

  constructor({ dbFilePathng, dbFilePathna, dbFilePathfg, dbFilePathfa, dbFilePathhg, dbFilePathha }) {
    if (dbFilePathng) {
      this.dbng = new nedb({ filename: dbFilePathng, autoload: true });
      console.log('DB connected to ' + dbFilePathng);
    } else {
      this.dbng = new nedb();
    }

    if (dbFilePathna) {
      this.dbna = new nedb({ filename: dbFilePathna, autoload: true });
      console.log('DB connected to ' + dbFilePathna);
    } else {
      this.dbna = new nedb();
    }

    if (dbFilePathfg) {
      this.dbfg = new nedb({ filename: dbFilePathfg, autoload: true });
      console.log('DB connected to ' + dbFilePathfg);
    } else {
      this.dbfg = new nedb();
    }

    if (dbFilePathfa) {
      this.dbfa = new nedb({ filename: dbFilePathfa, autoload: true });
      console.log('DB connected to ' + dbFilePathfa);
    } else {
      this.dbfa = new nedb();
    }

    if (dbFilePathhg) {
      this.dbhg = new nedb({ filename: dbFilePathhg, autoload: true });
      console.log('DB connected to ' + dbFilePathhg);
    } else {
      this.dbhg = new nedb();
    }

    if (dbFilePathha) {
      this.dbha = new nedb({ filename: dbFilePathha, autoload: true });
      console.log('DB connected to ' + dbFilePathha);
    } else {
      this.dbha = new nedb();
    }
  }


  init() {
    this.dbng.insert({
      id: '1',
      maxkcal: '2000',
      startDate: '2020-02-16',
      endDate: '2020-03-16'
    });
    //for later debugging
    console.log('dbng nutrition goal 1 inserted');
  }

  init() {
    this.dbna.insert({
      name: 'ate 2000 kcal from 16-02-2020 to 16-03-2020'
    });
    //for later debugging
    console.log('dbna nutrition achievement ate 2000 kcal from 16-02-2020 to 16-03-2020 inserted');
  }

  init() {
    this.dbfg.insert({
      id: '1',
      exercisename: '2000',
      reps: '15',
      sets: '3',
      startDate: '2020-02-16',
      endDate: '2020-03-16'
    });
    //for later debugging
    console.log('dbfg fitness goal 1 inserted');
  }


  init() {
    this.dbfa.insert({
      name: 'completed the leg day workout on 16-02-2020'
    });
    //for later debugging
    console.log('dbfa fitness achievement completed the leg day workout on 16-02-2020 inserted');
  }


  init() {
    this.dbhg.insert({
      id: '1',
      hoursofsleep: '8',
      startDate: '2020-02-16',
      endDate: '2020-03-16'
    });
    //for later debugging
    console.log('dbhg healthy lifestyle goal 1 inserted');
  }


  init() {
    this.dbha.insert({
      name: 'slept 8 hours today 16-02-2020 '
    });
    //for later debugging
    console.log('dbha nutrition achievement slept 8 hours today 16-02-2020 inserted');
  }

  getAllNutritionGoals() {
    return new Promise((resolve, reject) => {
      this.dbng.find({}, function (err, nutritionGoals) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log('function all() returns: ', nutritionGoals);
        }
      })
    })
  }

  getAllNutritionAchievements() {
    return new Promise((resolve, reject) => {
      this.dbna.find({}, function (err, nutritionAchievements) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log('function all() returns: ', nutritionAchievements);
        }
      })
    })
  }

  getAllFitnessGoals() {
    return new Promise((resolve, reject) => {
      this.dbfg.find({}, function (err, fitnessGoals) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log('function all() returns: ', fitnessGoals);
        }
      })
    })
  }

  getAllFitnessAchievements() {
    return new Promise((resolve, reject) => {
      this.dbfa.find({}, function (err, fitnessAchievements) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log('function all() returns: ', fitnessAchievements);
        }
      })
    })
  }

  getAllHealthyLifestyleGoals() {
    return new Promise((resolve, reject) => {
      this.dbhg.find({}, function (err, healthyLifestyleGoals) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log('function all() returns: ', healthyLifestyleGoals);
        }
      })
    })
  }

  getAllHealthyLifestyleAchievements() {
    return new Promise((resolve, reject) => {
      this.dbha.find({}, function (err, healthyLifestyleAchievements) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log('function all() returns: ', healthyLifestyleAchievements);
        }
      })
    })
  }




}

module.exports = wellnessAppModel;