var express = require('express');
var rotaHome = express.Router();
var HomeController = require('../controller/HomeController')


rotaHome.get('/', function(req, res, next) {
    HomeController.get();
});

module.exports = rotaHome; 