import { Readable } from 'node:stream';


class OneToHundredStream extends Readable{
  index=1

  _read(){
    const i = this.index++

    setTimeout(()=>{
      if(i>100){
        this.push(null)
      }else{
        const buf =Buffer.from(String(i))
        this.push(buf)
      }
    },2000)
  }
}

// faz requisição de um endereço para outro, sendo entre front e back ou entre back e back
//na versão 18 do Node
fetch('http://localhost:3334',{
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half'
})
