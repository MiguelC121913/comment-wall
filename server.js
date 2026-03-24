const jsonServer  = require('json-server')
const app         = jsonServer.create()
const router      = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// ← Esto es lo que faltaba: habilitar CORS
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