import { Readable, Transform, Writable } from 'node:stream';

// stream de leitura
class OneToHundredStream extends Readable{
  index =1;

  _read(){
    const i = this.index++

    setTimeout(() => {
      if (i>100) {
        this.push(null)
      }else{
        const buf=Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000);
  }
}

// Stream de transformação
class ConvertNegativeNumber extends Transform{
  _transform(chunk, encoding, callback){
    const transformed =Number(chunk.toString())*-1

    callback(null, Buffer.from(String(transformed)))
  }
}

// stream de escrita
class MultiplyByTenStream extends Writable{
  _write(chunk, encoding, callback){
    console.log(Number(chunk.toString())*10)
    callback()
  }
}

new OneToHundredStream()
.pipe(new ConvertNegativeNumber())
.pipe(new MultiplyByTenStream())

