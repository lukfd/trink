var express = require('express');
var router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../database/database.db');

/* GET a new set of questions. */
router.get('/', function(req, res, next) {
    db.all("SELECT * FROM easyTable", (err, rows) => {
        console.log(rows)
        res.send(rows);
    });
});

module.exports = router;
