const nutritionDAO = require('../models/nutritionGoalsModel.js');
const dbng = new nutritionDAO();


// Insert nutrition goal functionality
app.post('/addNutritionGoals', function (req, res) {
   dbng.serialize(() => {
      dbng.run('INSERT INTO nGoals(id,maxKcal,startDate,endDate) VALUES(?,?,?,?)', [req.body.id, req.body.maxkcal, req.body.startDate, req.body.endDate], function (err) {
         if (err) {
            return console.log(err.message);
         }
         res.sendFile(path.join(__dirname, './views/nutrition.mustache'));
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
         res.sendFile(path.join(__dirname, './views/nutrition.mustache'));
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