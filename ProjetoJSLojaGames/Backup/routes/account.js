let bd = require('../config/dbConnection')(); // puxa e usa a função que executa banco de dados


module.exports = function(express){
    express.get('/account', function(request, response){ // configurando o url padrão
        response.render('pages/home/account.html')
    }); 
}

module.exports.getAccountAPI = function(app){
    app.get('/account', function(req, res){
        bd.query('SELECT FROM Clientes WHERE name="nome";', function(erro, result){
            if(erro){
                console.log("Erro: " + erro); // erro para avisar o erro
            }
            res.json(result); // puxa o banco em json
        });
        
    });
}
/*
module.exports.createClienteAPI = function(app){
    app.post('/account', function(req, res){
        const {nome, email, senha, nascimento} = req.body;
        console.log(nome + " - " + email  + " - " + senha +  + " - " + nascimento);
        const data = [nome, email, senha, nascimento];

        bd.query('insert into cliente(nome, email, senha, nascimento) values(?, ?, ?, ?);', data, function(erro, result){
            if(erro){console.log("Erro: " + erro);}
            res.status(201).json({message: "Ok"});
        });


        
    });
}*/