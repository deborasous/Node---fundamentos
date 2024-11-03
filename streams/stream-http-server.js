import http from 'node:http'
import { Transform } from 'node:stream'

class ConvertNegativeNumber extends Transform{
  _transform(chunk, encoding, callback){
    const transformed =Number(chunk.toString())*-1

    console.log(transformed)

    callback(null, Buffer.from(String(transformed)))
  }
}

  //todas as portas de entrada e saídas no NODE, são streams, quer dizer que o REQ e RES também são streams
  //REQ = ReadableStream
  //RES = WritebleStream
const server =http.createServer((req,res)=>{
return req
.pipe(new ConvertNegativeNumber())
.pipe(res)

})

server.listen(3334)