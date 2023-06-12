let bd = require('../config/dbConnection')(); // puxa e usa a função que executa banco de dados
var express = require('express');
/*
var rotaHome = express.Router();
var HomeController = require('../controller/HomeController')
*/
module.exports = function(express){
    express.get('/', function(request, response){ // configurando o url padrão
        response.render('../views/pages/home/')
    });
}



/*
rotaHome.get('/', function(req, res, next) {
    HomeController.get();
});
*/