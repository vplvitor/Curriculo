let http = require('http');
let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.get('/', function(req, res)
{
    res.render('views/bruh');
});

app.get('/cadastrar', function(req, res)
{
    res.send('<html><head><title>Titulo</title></head>'
    +
    '<body><h1>=^))) pagina de cadastro</h1></body></html>');
});

app.get('/listar', function(req, res)
{
    res.send('<html><head><title>Titulo</title></head>'
    +
    '<body><h1>=^))) pagina de lista</h1></body></html>');
});



app.listen(8000, function(){
    console.log('Servidor iniciado na porta 8000');
});