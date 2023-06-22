/*
  ESTRUTURA DE REPETIÇÃO - FOR IN

  usar com objetos
  pega propriedade por propriedade

*/


const students = {
    name: "Henrique",
    age: 24,
    genre: "male"
}

for(let property in students){
    console.log(`${property} : ${students[property]}` )
}