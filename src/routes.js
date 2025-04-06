import { randomUUID } from 'node:crypto'
import { buildRoutePath } from './utils/build-route-path.js'

export function buildRoutes(database){
  return [
    {
      method: 'GET',
      path: buildRoutePath('/users'),
      handler:(req, res)=>{
        const users = database.select('users')

        return res.end(JSON.stringify(users))
      }
    },
    {
      method: 'POST',
      path: buildRoutePath('/users'),
      handler:(req, res)=>{
        const {name, email} = req.body

        const user = {
          id: randomUUID(),
          name,
          email, 
        }

        const created = database.insert('users', user)

        if (created) {
          return res.writeHead(201).end('Usuário criado com sucesso!')
        }

        return res.writeHead(201).end()
      }
    },
    {
      method: 'DELETE',
      path: buildRoutePath('/users/:id'),
      handler:(req, res)=>{
        const {id}=req.params;

        const deleted = database.delete('users', id)

        if (!deleted) {
          return res.writeHead(404).end('Usuário não encontrado.')
        }
        
        return res.writeHead(204).end(id)
      }
    },
    {
      method: 'PUT',
      path: buildRoutePath('/users/:id'),
      handler:(req, res) => {
        const {id} = req.params;
        const {name, email} = req.body

        const success = database.update('users', id,{
          name,
          email,
        });

        if (!success) {
          return res.writeHead(404).end('Usuário não encontrado.')
        }

        return res.writeHead(204).end(id)
      }
    }
  ]
}