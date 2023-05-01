const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
const path = require('path');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

const public = path.join(__dirname, 'public');
app.use(express.static('public'));



let db = new sqlite3.Database('./database/nutritionGoals.db', sqlite3.OPEN_READWRITE,
   (err) => {
      if (err) {
         console.error(err.message);
      } else
         console.log('Connected to the nutritionGoals database.');
   });

db.run('CREATE TABLE IF NOT EXISTS nGoals(id TEXT, maxKcal NUMBER, startDate DATE, endDate DATE)');
app.get('/', function(req,res){
   res.sendFile(path.join(__dirname,'./public/index.html'));
 });
// Insert
app.post('/add', function (req, res) {
   db.serialize(() => {
      db.run('INSERT INTO nGoals(id,maxKcal,startDate,endDate) VALUES(?,?,?,?)', [req.body.id, req.body.maxKcal, req.body.startDate, req.body.endDate], function (err) {
         if (err) {
            return console.log(err.message);
         }
         console.log("New nutrition goal has been added");
         res.sendFile(path.join(__dirname,'./public/index.html'));
      });
   });
});

app.get('/aboutUs.mustache', function (req, res) {
   res.sendFile(path.join(public, 'aboutUs.mustache'));
})


const router = require('./routes/wellnessAppRoutes');
app.use('/', router);


app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, './public/index.html'));
});



app.post('/addNutritionGoals', function (req, res) {
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
});

app.use(function (req, res) {
   res.status(404);
   res.send('Oops! We didn\'t find what you are looking for.');
})

app.listen(3000, () => {
   console.log('Server started on port 3000. Ctrl^c to quit.');
})