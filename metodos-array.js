/*
  ARRAY METODOS



*/


const students = ['João', 'Pedro', 'Maria', 'Henrique']

students.splice(1,0,"gabriel")

console.log(students)

//push students.push("nome do que quer colocar no array") adiciona no final do array
//length ( apara ver o tamanho do array)
//sort (organiza o array por ordem alfabetica)
//delete[0] (deleta uma posição so array)


//splice unir / ligar (indice que quero mudar,0(se quero retirar alguem coloco o numero da posição se quero só adicionar coloco o 0),'henrique'(cloquei o henrique no array))

//slice (fatiar) (cria um novo array, por isso deve ser armazenado em alguma variavel)  const newStudents = students.slice(1,3)


//pop (tira o ultimo item do array)
//shift ( tira o primeiro item do array)