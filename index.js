const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

const path = require('path');
const public = path.join(__dirname,'public');
app.use(express.static(public));

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const router = require('./routes/wellnessAppRoutes');
app.use('/', router);


app.use(function (req, res) {
   res.status(404);
   res.send('Oops! We didn\'t find what you are looking for.');
})

app.listen(3000, () => {
   console.log('Server started on port 3000. Ctrl^c to quit.');
})
/*
//--------------------------------------------Nutrition Section-----------------------------------------
// set up nutrition goal database
let dbng = new sqlite3.Database('./database/nutritionGoals.db', sqlite3.OPEN_READWRITE,
   (err) => {
      if (err) {
         console.error(err.message);
      } else
         console.log('Connected to the nutritionGoals database.');
   });

dbng.run('CREATE TABLE IF NOT EXISTS nGoals(id TEXT, maxkcal NUMBER, startDate DATE, endDate DATE)');
//here
// Insert nutrition goal functionality
app.post('/addNutritionGoals', function (req, res) {
   dbng.serialize(() => {
      dbng.run('INSERT INTO nGoals(id,maxKcal,startDate,endDate) VALUES(?,?,?,?)', [req.body.id, req.body.maxkcal, req.body.startDate, req.body.endDate], function (err) {
         if (err) {
            return console.log(err.message);
         }
         
         res.sendFile(path.join(__dirname, './public/index.html'));
         console.log("New nutrition goal has been added");
         res.send("New nutrition goal added successfully");
      });
   });
});


//Update nutrition goal functionality
app.post('/updateNutritionGoals', function (req, res) {
   dbng.serialize(() => {
      dbng.run('UPDATE nGoals SET maxkcal = ?, startDate = ?, endDate = ? WHERE id = ?', [req.body.maxkcal, req.body.startDate, req.body.endDate, req.body.id],
      function (err) {
            if (err) {77
               res.send("Error encountered while updating");
               return console.error(err.message);
            }
            res.send("Nutrition Goal updated successfully");
            console.log("Nutrition Goal updated successfully");
         });
   });
});

//Delete nutrition goal functionality
app.post('/deleteNutritionGoals', function (req, res) {
   dbng.serialize(() => {
      dbng.run('DELETE FROM nGoals WHERE id = ?', req.body.id, function (err) {
         if (err) {
            res.send("Error encountered while deleting");
            return console.error(err.message);
         }
         res.send("Nutrition Goal deleted");
         console.log("Nutrition Goal deleted");
      });
   });   
});
//show all nutrition goals functionality
app.post("/showAllNutritionGoals", function (req, res) {
   dbng.serialize(() => {
      dbng.all("SELECT * FROM nGoals", function (err, rows) {
         if (err) {
            res.status(400).json({ "error": err.message });
            return;
         }
         res.json({
            "message": "success",
            "data": rows
         })
      });
   });
});

//Nutrition Achievements database setup
let dbna = new sqlite3.Database('./database/nutritionAchievements.db', sqlite3.OPEN_READWRITE, (err) => {
   if (err) {
     console.error(err.message);
   } else
   console.log('Connected to the nutrition achievements database.');
 });

 dbna.run('CREATE TABLE IF NOT EXISTS nAchievements(name TEXT)');

// Insert nutrition achievement
app.post('/addNutritionAchievement', function (req, res) {
   dbna.serialize(() => {
      dbna.run('INSERT INTO nAchievements(name) VALUES(?)', [req.body.name], function (err) {
         if (err) {
            return console.log(err.message);
         }
         res.sendFile(path.join(__dirname, './public/index.html'));
         res.send("New nutrition achievement added successfully");
         console.log("New nutrition achievement has been added");
         
      });
   });
});


//Show all nutrition achievements
app.post("/showAllNutritionAchievements", function (req, res) {
   dbna.serialize(() => {
      dbna.all("SELECT * FROM nAchievements", function (err, rows) {
         if (err) {
            res.status(400).json({ "error": err.message });
            return;
         }
         res.json({
            "message": "success",
            "data": rows
         })
      });
   });
});

//------------------------------------Fitness Section--------------------------------------------

// set up fitness goal database
let dbfg = new sqlite3.Database('./database/fitnessGoals.db', sqlite3.OPEN_READWRITE,
   (err) => {
      if (err) {
         console.error(err.message);
      } else
         console.log('Connected to the fitnessGoals database.');
   });

dbfg.run('CREATE TABLE IF NOT EXISTS fGoals(id TEXT, exercisename TEXT, reps NUMBER, sets NUMBER, startDate DATE, endDate DATE)');



// Insert fitness goal functionality
app.post('/addFitnessGoals', function (req, res) {
   dbfg.serialize(() => {
      dbfg.run('INSERT INTO fGoals(id,exercisename,reps,sets,startDate,endDate) VALUES(?,?,?,?,?,?)', [req.body.id, req.body.exercisename, req.body.reps, req.body.sets, req.body.startDate, req.body.endDate], function (err) {
         if (err) {
            return console.log(err.message);
         }
         
         res.sendFile(path.join(__dirname, './public/index.html'));
         console.log("New Fitness goal has been added");
         res.send("New Fitness goal added successfully");
      });
   });
});


//Update fitness goal functionality
app.post('/updateFitnessGoals', function (req, res) {
   dbfg.serialize(() => {
      dbfg.run('UPDATE fGoals SET exercisename = ?, reps = ?, sets = ?, startDate = ?, endDate = ? WHERE id = ?', [req.body.exercisename, req.body.reps, req.body.sets , req.body.startDate, req.body.endDate, req.body.id],
      function (err) {
            if (err) {77
               res.send("Error encountered while updating");
               return console.error(err.message);
            }
            res.send("Fitness Goal updated successfully");
            console.log("Fitness Goal updated successfully");
         });
   });
});

//Delete fitness goal functionality
app.post('/deleteFitnessGoals', function (req, res) {
   dbfg.serialize(() => {
      dbfg.run('DELETE FROM fGoals WHERE id = ?', req.body.id, function (err) {
         if (err) {
            res.send("Error encountered while deleting");
            return console.error(err.message);
         }
         res.send("Fitness Goal deleted");
         console.log("Fitness Goal deleted");
      });
   });   
});
//show all fitness goals functionality
app.post("/showAllFitnessGoals", function (req, res) {
   dbfg.serialize(() => {
      dbfg.all("SELECT * FROM fGoals", function (err, rows) {
         if (err) {
            res.status(400).json({ "error": err.message });
            return;
         }
         res.json({
            "message": "success",
            "data": rows
         })
      });
   });
});

//fitness Achievements database setup
let dbfa = new sqlite3.Database('./database/fitnessAchievements.db', sqlite3.OPEN_READWRITE, (err) => {
   if (err) {
     console.error(err.message);
   } else
   console.log('Connected to the fitnessAchievements database.');
 });

 dbfa.run('CREATE TABLE IF NOT EXISTS fAchievements(name TEXT)');

// Insert fitness achievement
app.post('/addFitnessAchievement', function (req, res) {
   dbfa.serialize(() => {
      dbfa.run('INSERT INTO fAchievements(name) VALUES(?)', [req.body.name], function (err) {
         if (err) {
            return console.log(err.message);
         }
         res.sendFile(path.join(__dirname, './public/index.html'));
         res.send("New fitness achievement added successfully");
         console.log("New fitness achievement has been added");
         
      });
   });
});


//Show all fitness achievements
app.post("/showAllFitnessAchievements", function (req, res) {
   dbfa.serialize(() => {
      dbfa.all("SELECT * FROM fAchievements", function (err, rows) {
         if (err) {
            res.status(400).json({ "error": err.message });
            return;
         }
         res.json({
            "message": "success",
            "data": rows
         })
      });
   });
});

//------------------------------------------------------------------------------------------------

//--------------------------------------------Healthy Lifestyle Section---------------------------

// set up nutrition goal database
let dbhg = new sqlite3.Database('./database/healthyLifestyleGoals.db', sqlite3.OPEN_READWRITE,
   (err) => {
      if (err) {
         console.error(err.message);
      } else
         console.log('Connected to the healthyLifestyleGoals database.');
   });

dbhg.run('CREATE TABLE IF NOT EXISTS hGoals(id TEXT, hoursofsleep NUMBER, startDate DATE, endDate DATE)');



// Insert Healthy Lifestyle goal functionality
app.post('/addHealthyGoals', function (req, res) {
   dbhg.serialize(() => {
      dbhg.run('INSERT INTO hGoals(id,hoursofsleep,startDate,endDate) VALUES(?,?,?,?)', [req.body.id, req.body.hoursofsleep, req.body.startDate, req.body.endDate], function (err) {
         if (err) {
            return console.log(err.message);
         }
         
         res.sendFile(path.join(__dirname, './public/index.html'));
         console.log("New Healthy Lifestyle goal has been added");
         res.send("New Healthy Lifestyle goal added successfully");
      });
   });
});


//Update Healthy Lifestyle goal functionality
app.post('/updateHealthyGoals', function (req, res) {
   dbhg.serialize(() => {
      dbhg.run('UPDATE hGoals SET hoursofsleep = ?, startDate = ?, endDate = ? WHERE id = ?', [req.body.hoursofsleep, req.body.startDate, req.body.endDate, req.body.id],
      function (err) {
            if (err) {77
               res.send("Error encountered while updating");
               return console.error(err.message);
            }
            res.send("Healthy Lifestyle Goal updated successfully");
            console.log("Healthy Lifestyle Goal updated successfully");
         });
   });
});

//Delete Healthy Lifestyle goal functionality
app.post('/deleteHealthyGoals', function (req, res) {
   dbhg.serialize(() => {
      dbhg.run('DELETE FROM hGoals WHERE id = ?', req.body.id, function (err) {
         if (err) {
            res.send("Error encountered while deleting");
            return console.error(err.message);
         }
         res.send("Healthy Lifestyle Goal deleted");
         console.log("Healthy Lifestyle Goal deleted");
      });
   });   
});
//show all Healthy Lifestyle goals functionality
app.post("/showAllHealthyGoals", function (req, res) {
   dbhg.serialize(() => {
      dbhg.all("SELECT * FROM hGoals", function (err, rows) {
         if (err) {
            res.status(400).json({ "error": err.message });
            return;
         }
         res.json({
            "message": "success",
            "data": rows
         })
      });
   });
});

//Healthy Lifestyle Achievements database setup
let dbha = new sqlite3.Database('./database/healthyLifestyleAchievements.db', sqlite3.OPEN_READWRITE, (err) => {
   if (err) {
     console.error(err.message);
   } else
   console.log('Connected to the Healthy Lifestyle achievements database.');
 });

 dbha.run('CREATE TABLE IF NOT EXISTS hAchievements(name TEXT)');

// Insert Healthy Lifestyle achievement
app.post('/addHealthyAchievement', function (req, res) {
   dbha.serialize(() => {
      dbha.run('INSERT INTO hAchievements(name) VALUES(?)', [req.body.name], function (err) {
         if (err) {
            return console.log(err.message);
         }
         res.sendFile(path.join(__dirname, './public/index.html'));
         res.send("New Healthy Lifestyle achievement added successfully");
         console.log("New Healthy Lifestyle achievement has been added");
         
      });
   });
});


//Show all Healthy Lifestyle achievements
app.post("/showAllHealthyAchievements", function (req, res) {
   dbha.serialize(() => {
      dbha.all("SELECT * FROM hAchievements", function (err, rows) {
         if (err) {
            res.status(400).json({ "error": err.message });
            return;
         }
         res.json({
            "message": "success",
            "data": rows
         })
      });
   });
});

//------------------------------------------------------------------------------------------------

*/
