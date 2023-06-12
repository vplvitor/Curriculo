let bd = require('../config/dbConnection')(); // puxa e usa a função que executa banco de dados
var express = require('express');

module.exports = function(express){
    express.get('/account', function(request, response){ // configurando o url padrão
        response.render('../views/pages/home/account')
    }); 
}
module.exports.getAccountAPI = function(app){
    app.get('/account', function(req, res){
        bd.query('SELECT * FROM register', function(erro, result){
            if(erro){
                console.log("Erro: " + erro); // erro para avisar o erro
            }
            res.json(result); // puxa o banco em json
        });
        
    });
}

/*
rotaAccount.get('/Account', function(req, res, next) {
    AccountController.get();
});
*/




/*
module.exports.createRegisterAPI = function(app){
    app.post('/account', function(req, res){
        const {nome, email, senha, nascimento} = req.body;
        console.log(nome + " - " + email  + " - " + senha +  + " - " + nascimento);
        const data = [nome, email, senha, nascimento];

        bd.query('insert into Register(nome, email, senha, nascimento) values(?, ?, ?, ?);', data, function(erro, result){
            if(erro){console.log("Erro: " + erro);}
            res.status(201).json({message: "Ok"});
        });


        
    });
}*/