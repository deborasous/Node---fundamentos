export class Database{
  #database ={}

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

    return data
  }
}