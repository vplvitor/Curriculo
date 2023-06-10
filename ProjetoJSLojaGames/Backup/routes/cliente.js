/*

let bd = require('../config/dbConnection')(); // puxa e usa a função que executa banco de dados

module.exports.getClienteAPI = function(app){
    app.get('/cliente', function(req, res){
        bd.query('select * from cliente;', function(erro, result){
            if(erro){
                console.log("Erro: " + erro); // erro para avisar o erro
            }
            res.json(result); // puxa o banco em json
        });
        
    });
}

module.exports.createClienteAPI = function(app){
    app.post('/cliente', function(req, res){
        const {razaoSocial, cnpj, limiteCredito} = req.body;
        console.log(razaoSocial + " - " + cnpj);
        const data = [razaoSocial, cnpj, limiteCredito];

        bd.query('insert into cliente(nome, cnpj, limiteCredito) values(?, ?, ?);', data, function(erro, result){
            if(erro){console.log("Erro: " + erro);}
            res.status(201).json({message: "Ok"});
        });


        
    });
}
*/