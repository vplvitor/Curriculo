class Tabelas{
    // construtor de Tabela
    init(conexao){
        this.conexao = conexao
        this.criarRegister()
        this.criarCodigos()
        this.criarJogos()
    }


    criarRegister(){
        let sql = 'CREATE TABLE IF NOT EXISTS Register '+
        '(idRegister INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'name VARCHAR(100) UNIQUE NOT NULL,'+
        'email VARCHAR(100) UNIQUE NOT NULL,'+
        'password VARCHAR(50) DEFAULT "senha",'+
        "birth date DEFAULT '0000-12-25')"
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Register criada com sucesso!')
            }
        })
    }
    criarCodigos(){
        let sql = 'CREATE TABLE IF NOT EXISTS Codes '+
        '(idCode INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'code VARCHAR(18) UNIQUE NOT NULL)'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Codes criada com sucesso!')
            }
        })
    }
    criarJogos(){
        let sql = 'CREATE TABLE IF NOT EXISTS Games '+
        '(idGame INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'name VARCHAR(100) NOT NULL,' +
        'price double NOT NULL);'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela Games criada com sucesso!')
            }
        })
    }
}
module.exports = new Tabelas
