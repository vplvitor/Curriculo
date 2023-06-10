const { json } = require('body-parser')
const Register = require('../model/register')
const rotaRegister = '/register'

module.exports = app => {
    app.get(rotaRegister, (req, res) => {
       // retorna os dados??
       Register.lista(res)
    })
    app.get((rotaRegister+'/:id'),(req, res) => {
       let id = parseInt(req.params.id)
       Register.buscaPorId(id, res)
    })
    app.post(rotaRegister, (req, res) => {
       console.log(req.body)
       Register.adiciona(req.body, res)
       //res.send('Você esta na rota '+ rota +' via POST')
    })
    //PUT??
    app.patch((rotaRegister+'/:id'),(req, res) =>{
       let id = parseInt(req.params.id)
       let valores = req.body
       Register.altera(id, valores, res)
    })
 }