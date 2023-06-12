const account = require('../model/account')
const rotaAccount = '/account'
module.exports = app => {
      app.post(rotaAccount, (req, res) => {
      console.log(req.body)
      account.adiciona(req.body, res)
      //res.send('Você esta na rota '+ rota +' via POST')
      })
     app.get(rotaAccount, (req, res) => {
        // retorna os dados??
        account.lista(res)
     })
     app.get((rotaAccount+'/:id'),(req, res) => {
        let id = parseInt(req.params.id)
        account.buscaPorId(id, res)
     })
     app.patch((rotaAccount+'/:id'),(req, res) =>{
        let id = parseInt(req.params.id)
        let valores = req.body
        account.altera(id, valores, res)
     })
  }