const jsonServer  = require('json-server')
const app         = jsonServer.create()
const router      = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

app.use(middlewares)
app.use(jsonServer.bodyParser)
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})