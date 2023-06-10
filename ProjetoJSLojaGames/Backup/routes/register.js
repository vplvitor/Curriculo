let bd = require('../config/dbConnection')(); // puxa e usa a função que executa banco de dados
var express = require('express');
var rotaRegister = express.Router();
var RegisterController = require('../controller/register')


module.exports = function(express){
    express.get('/register', function(request, response){ // configurando o url padrão
        response.render('pages/home/register')
    }); 
}
/*
rotaRegister.get('/register', function(req, res, next) {
    RegisterController.get();
});


module.exports.createRegisterAPI = function(app){
    app.post('/register', function(req, res){
        bd.query('INSERT INTO Clientes(nome, email, senha, nascimento) VALUES('+body+');', function(erro, result){
            if(erro){
                console.log("Erro: " + erro); // erro para avisar o erro
            }
            res.json(result); // puxa o banco em json
        });
        
    });
}

module.exports = function(express){
    express.post('/account', function(request, response){ // configurando o url padrão
        response.render('pages/home/account.html')
    }); 
}
*/
module.exports = rotaRegister
