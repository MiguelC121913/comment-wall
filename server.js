const jsonServer  = require('json-server')
const fs          = require('fs')
const app         = jsonServer.create()

// Si no existe db.json lo crea vacío
if (!fs.existsSync('./db.json')) {
  fs.writeFileSync('./db.json', JSON.stringify({ comments: [] }, null, 2))
}

const router      = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') return res.sendStatus(200)
  next()
})

app.use(middlewares)
app.use(jsonServer.bodyParser)
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})