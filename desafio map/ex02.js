//criar um novo array apartir do array percorrido, se o aluno tirou 7 ou mais ele esta aprovado, se não reprovado
// mudar o nome da prodiedade testeGrade para finalResult:

const students = [
    { name: 'Henrique', testeGrade: 7 },
    { name: 'Evelyn', testeGrade: 9 },
    { name: 'Lara', testeGrade: 4 },
    { name: 'Cibelle', testeGrade: 6 },
    { name: 'Jaqueline', testeGrade: 8 },
    { name: 'André', testeGrade: 10 },
    { name: 'Ruth', testeGrade: 3},
   
];


const newStudents = students.map( (student) => {
    
    const newStudent = {
        name: student.name,
        finalResult: student.testeGrade >= 7 ? "approved" : "disapproved"
    }

    return newStudent
})

console.log(newStudents)