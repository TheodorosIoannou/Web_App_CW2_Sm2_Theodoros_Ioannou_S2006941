const express = require('express');
const mustache = require('mustache');
const path = require('path');
const Database = require('nedb');
const app = express();
app.use(express.static('public'));

//setting up the database
const db = {};
db.users = new Database 





const public = path.join(__dirname, 'public');
app.use(express.static(public));

app.get('/', function (req, res) {
    res.send('Hello! Welcome to my wellness web application.');
})

app.get('/aboutUs', function (req, res) {
    res.sendFile(path.join(public, 'aboutUs.html'));
})

app.use(function (req, res) {
    res.status(404);
    res.send('Oops! We didn\'t find what you are looking for.');
})

app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})
