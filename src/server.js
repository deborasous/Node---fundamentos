import http from 'node:http'
import { Database } from './database.js'
import { json } from './middlewares/json.js'
import { buildRoutes } from './routes.js'

const database = new Database()
await database.ready()

const routes = buildRoutes(database)

const server = http.createServer(async (req, res) => {
  await json(req, res)
  const {method, url} = req

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  });

  if (route) {
    const match = url.match(route.path)
    const params = match.groups || {}

    req.params = params
   
    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)