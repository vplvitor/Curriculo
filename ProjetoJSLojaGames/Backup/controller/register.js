const register = require('../model/register')
const rotaRegister = '/register'
module.exports = app => {
    app.post(rotaRegister, (req, res) => {
       console.log(req.body)
       register.adiciona(req.body, res)
       //res.send('Você esta na rota '+ rota +' via POST')
    })
    app.get(rotaRegister, (req, res) => {
      // retorna os dados??
      register.lista(res)
   })
   app.get((rotaRegister+'/:id'),(req, res) => {
      let id = parseInt(req.params.id)
      register.buscaPorId(id, res)
   })
    //PUT??
    app.patch((rotaRegister+'/:id'),(req, res) =>{
       let id = parseInt(req.params.id)
       let valores = req.body
       register.altera(id, valores, res)
    })
    
 }