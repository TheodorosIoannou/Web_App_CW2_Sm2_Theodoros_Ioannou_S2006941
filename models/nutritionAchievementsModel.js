const sqlite3 = require('sqlite3').verbose();

//Nutrition Achievements database setup
let dbna = new sqlite3.Database('./database/nutritionAchievements.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    } else
    console.log('Connected to the nutrition achievements database.');
  });
 
  dbna.run('CREATE TABLE IF NOT EXISTS nAchievements(name TEXT)');

  module.exports = dbna;
