const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"codigogames"
})

module.exports = conexao
