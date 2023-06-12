const conexao = require('../infra/connection')

class Account{

    lista(res){
        const sql = 'SELECT * FROM Register'
        conexao.query(sql, (erro, resultado) => {
            if(erro){res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    /*
    buscaPorId(id, res){
        let sql = 'SELECT * FROM Register WHERE idRegister=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    
    altera(id, valores, res){
        let sql = 'UPDATE Register SET ? WHERE idRegister = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    */
}

module.exports = new Account