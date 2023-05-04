const sqlite3 = require('sqlite3').verbose();

// set up nutrition goal database
let dbng = new sqlite3.Database('./database/nutritionGoals.db', sqlite3.OPEN_READWRITE,
    (err) => {
        if (err) {
            console.error(err.message);
        } else
            console.log('Connected to the nutritionGoals database.');
    });

dbng.run('CREATE TABLE IF NOT EXISTS nGoals(id TEXT, maxkcal NUMBER, startDate DATE, endDate DATE)');



module.exports = dbng;