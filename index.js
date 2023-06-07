const app = require('./config/server'); // importando servidor express feito

let rotaHome = require('./routes/home');
rotaHome(app);

let rotaCliente = require('./routes/cliente');
rotaCliente.getClienteAPI(app);
rotaCliente.createClienteAPI(app);


app.listen(8000, function(){
    console.log("Servidor iniciado na porta 8000");
});