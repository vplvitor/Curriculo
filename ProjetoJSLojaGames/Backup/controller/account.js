const { json } = require('body-parser')
const Account = require('../model/account')
const rotaAccount = '/account'

module.exports = app => {
    app.get(rotaAccount, (req, res) => {
       // retorna os dados??
       Account.lista(res)
    })
    app.get((rotaAccount+'/:id'),(req, res) => {
       let id = parseInt(req.params.id)
       Account.buscaPorId(id, res)
    })
    app.post(rotaAccount, (req, res) => {
       console.log(req.body)
       Account.adiciona(req.body, res)
       //res.send('Você esta na rota '+ rota +' via POST')
    })
    //PUT??
    app.patch((rotaAccount+'/:id'),(req, res) =>{
       let id = parseInt(req.params.id)
       let valores = req.body
       Account.altera(id, valores, res)
    })
 }