const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');

const app = express();

//const mustache = require('mustache-express');
//app.engine('mustache', mustache());
//app.set('view engine', 'mustache');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

//const public = path.join(__dirname, 'public');
//app.use(express.static('public'));



let dbng = new sqlite3.Database('./database/nutritionGoals.db', sqlite3.OPEN_READWRITE,
   (err) => {
      if (err) {
         console.error(err.message);
      } else
         console.log('Connected to the nutritionGoals database.');
   });

dbng.run('CREATE TABLE IF NOT EXISTS nGoals(id TEXT, maxkcal NUMBER, startDate DATE, endDate DATE)');

//display interface
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, './public/index.html'));
});

// Insert nutrition goal
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



//view nutrition goal
/*app.post('/view', function (req, res) {
   db.serialize(() => {
      db.each('SELECT id ID, maxkcal MAXKCAL, startDate STARTDATE, endDate ENDDATE FROM nGoals WHERE id =?', [req.body.id],
         function (err, row) {
            if (err) {
               res.send("Error encountered while displaying");
               return console.error(err.message);
            }
            res.send(` ID: ${row.ID}, MAXKCAL: ${row.MAXKCAL}, Start Date: ${row.STARTDATE}, End Date: ${row.ENDDATE}`);
            console.log("Entry displayed successfully");
         });
   });
})*/

//Update
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

//Delete
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
//show all
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


app.get('/aboutUs.mustache', function (req, res) {
   res.sendFile(path.join(public, 'aboutUs.mustache'));
})


/*const router = require('./routes/wellnessAppRoutes');
app.use('/', router);
*/




/*app.post('/addNutritionGoals', function (req, res) {
   db.serialize(() => {
      db.run('INSERT INTO nutrinionGoals(id, maxKcal, startDate, endDate) VALUES(?,?,?,?)'[req.body.id, req.body.maxKcal, req.body.startDate, req.body.endDate],
         function (err) {
            if (err) {
               return console.log(err.message);
            }
            console.log("New nutrition goal has been added");
            res.sendFile(path.join(__dirname, './nutrition/nutrition.mustache'));
         });
   });
});*/

app.use(function (req, res) {
   res.status(404);
   res.send('Oops! We didn\'t find what you are looking for.');
})

app.listen(3000, () => {
   console.log('Server started on port 3000. Ctrl^c to quit.');
})