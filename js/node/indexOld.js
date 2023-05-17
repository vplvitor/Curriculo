let http = require('http');

let servidor = http.createServer(function(req, res){
    let endereco = req.url;
    console.log("URL: " + endereco);

    if(endereco == '/cadastrar')
    {
        res.end('<html><head><title>Titulo</title></head>'
    +
    '<body><h1>=^))) pagina de cadastro</h1></body></html>')
    }else if(endereco == '/listar')
    {
        res.end('<html><head><title>Titulo</title></head>'
    +
    '<body><h1>=^))) pagina de listagem</h1></body></html>')
    }else if(endereco == '/compras')
    {
        res.end('<html><head><title>Titulo</title></head>'
    +
    '<body><h1>=^))) pagina de compras</h1></body></html>')
    }else{
    res.end('<html><head><title>Titulo</title></head>'
    +
    '<body><h1>=^))) pagina inicial</h1></body></html>');
    }
});

servidor.listen(8000);