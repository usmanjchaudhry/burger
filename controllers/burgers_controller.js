var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    dataToDisplay = data.slice(Math.max(data.length - 10, 1));

    res.render("index", {
      burgers: dataToDisplay
    });
  });
});

router.post("/", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect("/");
  });
});

module.exports = router;
