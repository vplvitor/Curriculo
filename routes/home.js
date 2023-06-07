module.exports = function(express){
    express.get('/', function(request, response){ // configurando o url padrão
        response.render('pages/home/index')
    }); 
}