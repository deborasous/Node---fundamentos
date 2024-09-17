import http from 'node:http'

const server = http.createServer((req, res)=>{
const {method, url} = req

if(method === 'GET' && url === '/users'){
  return res.end('Lista de usuários')
}

if (method === 'POST' && url === '/users') {
  return res.end('Criar usuários')
}

  return res.end("Hello")
})

server.listen(3333)