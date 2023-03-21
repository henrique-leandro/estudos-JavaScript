/*
   FILTER 

    - cria um novo array aparetir do array percorrido
    - cria um novo array APENAS com os elementos filtrados
      aceita 3 parametros
       1 - item array
       2 - index
       3- array completo
*/

const list = [
    { name: 'Henrique', vip: true },
    { name: 'Evelyn', vip: false },
    { name: 'Maria', vip: true },
    { name: 'José', vip: true },
    { name: 'Pietro', vip: false },
    { name: 'Bruno', vip: true },
    { name: 'Larissa', vip: false },
];


const newList = list.filter( client => {
    return client.vip  // retorna apenas os vip 
})

//console.log(newList)

const students = [
    { name: 'Henrique', testeGrade: 7 },
    { name: 'Evelyn', testeGrade: 9 },
    { name: 'Lara', testeGrade: 4 },
    { name: 'Cibelle', testeGrade: 6 },
    { name: 'Jaqueline', testeGrade: 8 },
    { name: 'André', testeGrade: 10 },
    { name: 'Ruth', testeGrade: 3},
   
];


const newStudents = students.filter( student => {
    return student.testeGrade >= 7
})

console.log(newStudents);