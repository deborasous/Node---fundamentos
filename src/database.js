import fs from "node:fs/promises"

//para que o arquivo **db.json** não seja criado no diretório principal, vamos usar a ckasse URl para indicar o caminho relativo de onde desejamos criar o *db.json** 
const databasePath= new URL('db.json', import.meta.url)

export class Database{
  #database ={}
  #ready

  constructor(){
    this.#ready = fs.readFile(databasePath, 'utf8')
      .then(data => {
        this.#database=JSON.parse(data)
      })
      .catch(()=>{
        //cria o db.json vazio mesmo que não esteja sendo enviado nada
        this.#persist()
      })
  }

  async ready() {
    await this.#ready
  }

  #persist(){
    return fs.writeFile(databasePath, JSON.stringify(this.#database, null, 2))
  } 

  //método select que recebe a tabela que deseja selecionar ou um objeto vazio
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

  delete(table, id){
    if (!Array.isArray(this.#database[table])) {
      return false;
    }

    const index = this.#database[table].findIndex(item => item.id === id);
    if(index === -1){
      return false;
    }

    this.#database[table].splice(index, 1);
    this.#persist();

    return true;
  }

  update(table, id, data) {
    const rowIndex = this.#database[table]?.findIndex(item => item.id === id);

    if (rowIndex === undefined || rowIndex < 0) {
      return false
    }

    this.#database[table][rowIndex] = {
      ...this.#database[table][rowIndex],
      ...data,
    };

    this.#persist();
    return true;
  }
}