
const wellnessAppDAO = require('../models/wellnessApp');
const db = new wellnessAppDAO();

db.init();

exports.entries_list = function(req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    db.getAllEntries();
    }
    exports.landing_page = function(req, res) {
        res.send('<h1>Welcome to the guestbook application.</h1>');
    }
    exports.new_entry = function(req, res) {
        res.send('<h1>Not yet implemented: show a new entry page.</h1>');
    }
    exports.peters_entries = function(req, res) {
        res.send('<h1>Processing Peter\'s Entries, see terminal</h1>');
        db.getPetersEntries();
    }