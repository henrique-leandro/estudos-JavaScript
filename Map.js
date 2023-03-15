/*
  MAP 

   - Cria um novo array, a partir do array percorrido ( array original)
   - Cria um novo array, com a mesma quantidade  de itens do array original
   - aceita 3 parametros
      - item do array
      - index
      - array completo
*/

const numbers = [1,2,3,4,5];

const students = [
    {nome: "henrique", age: 24},
    {nome: "joão", age: 21},
    {nome: "lucas", age: 12},
    {nome: "maria", age: 45},
    {nome: "gabriel", age: 34},
    {nome: "bruna", age: 17}
];

const newNumbers = numbers.map( (number) => {
    return number * 2
})

//console.log(numbers)
//console.log(newNumbers)
//   nome do novo array      array original   parametro que pega os itens do array            
const newStudents    =       students.map  ( (student) => {

    const newStudent = {  // modifica o objeto que esta recebendo no parametro student
        nome: student.nome +  ' de Sales',
        age: student.age + 10
    }
    return newStudent
})

console.log(newStudents)