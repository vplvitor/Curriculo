let bd = require('../config/dbConnection')(); // puxa e usa a função que executa banco de dados
var express = require('express');


module.exports = function(express){
    express.get('/register', function(request, response){ // configurando o url padrão
        response.render('../views/pages/home/register')
    }); 
}
module.exports.createRegisterAPI = function(app) {
    app.post('/register', function(req, res) {
        let { name, email, password, birth } = req.body;
        let query = 'INSERT INTO register (name, email, password, birth) VALUES (?, ?, ?, ?)';
        let values = [name, email, password, birth];

        bd.query(query, values, function(erro, result) {
            if (erro) {
                console.log("Erro: " + erro);
                res.status(500).json({ error: 'Ocorreu um erro no Insert.' });
            } else {
                res.json(result);
            }
        });
    });
}
module.exports.getRegisterAPI = function(app){
    app.get('/register', function(req, res){
        bd.query('SELECT * FROM register', function(erro, result){
            if(erro){
                console.log("Erro: " + erro); // erro para avisar o erro
            }
            res.json(result); // puxa o banco em json
        });
        
    });
}

/*
rotaRegister.get('/register', function(req, res, next) {
    RegisterController.get();
});
*/
/*
module.exports.createRegisterAPI = function(app){
    app.post('/register', function(req, res){
        bd.query('INSERT INTO Register(nome, email, senha, nascimento) VALUES('+body+');', function(erro, result){
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
