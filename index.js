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






const router = require('./routes/wellnessAppRoutes');
app.use('/', router);

app.get('/', function (req, res) {
   res.send('Hello! Welcome to my wellness web application.');
})

app.get('/aboutUs.mustache', function (req, res) {
   res.sendFile(path.join(public, 'aboutUs.mustache'));
})


app.use(function (req, res) {
   res.status(404);
   res.send('Oops! We didn\'t find what you are looking for.');
})

app.listen(3000, () => {
   console.log('Server started on port 3000. Ctrl^c to quit.');
})