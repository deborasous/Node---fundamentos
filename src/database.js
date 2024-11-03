import fs from "node:fs/promises"

//para que o arquivo **db.json** não seja criado no diretório principal, vamos usar a ckasse URl para indicar o caminho relativo de onde desejamos criar o *db.json** 
const databasePath= new URL('db.json', import.meta.url)

export class Database{
  #database ={}

  constructor(){
    fs.readFile(databasePath, 'utf8')
      .then(data => {
        this.#database=JSON.parse(data)
      })
      .catch(()=>{
        //cria o db.json vazio mesmo que não esteja sendo enviado nada
        this.#persist()
      })
  }

  #persist(){
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  } 

  //método select que recebe a tabela que deseja selecionar
  select(table){
    const data= this.#database[table] ?? []

    return data
  }
  //metodo insert que recebe a tabela e os dados que deseja fazer a inserção
  insert(table, data){
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    }else{
      this.#database[table] = [data]
    }

    this.#persist()

    return data
  }
}