const conexao = require('../infra/connection')

class Register{

    adiciona(Register, res){
        let sql = 'INSERT INTO Register SET ?'
        conexao.query(sql,Register,(erro, resultado)=> {
            if(erro){
                res.json(erro)
                console.log(erro)
            }else{
                res.json(resultado)
            }
        })
    }
    altera(id, valores, res){
        let sql = 'UPDATE Register SET ? WHERE idRegister = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.json(erro)
            }else{
                res.json(resultado)
            }
        })
    }

}

module.exports = new Register