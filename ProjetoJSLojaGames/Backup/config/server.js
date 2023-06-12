const express = require('express'); // puxando a library express
const app = express(); // criado variavel que executa express

app.set('view engine','ejs'); //Configurando o ejs como visualizador padrao
app.use(express.static('views/static')); // configurando o express para files estaticos
app.use(express.json()); // configurando express para trabalhar com jsons
app.use(express.urlencoded({extend: true})); // configurando express para receber form html em json

module.exports = app;