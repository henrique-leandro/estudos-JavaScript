/*
 For each (serve para percorer arrays)


 primeiro paramentro = item
 segundo parametro = index ( qual posição que esta)
 terceiro parametro = mostra o array completo quantas vezes for a quantidade de itens

 ex: students.forEach( (item, index, array) =>{
    console.log(item, index, array)
 })

*/


const students = [
    {nome: "henrique", age: 24},
    {nome: "joão", age: 21},
    {nome: "lucas", age: 12},
    {nome: "maria", age: 45},
    {nome: "gabriel", age: 34},
    {nome: "bruna", age: 17},
];

let allStudentsAge = 0;

students.forEach( (item, index) => {

    allStudentsAge += item.age

    console.log(`O aluno chama-se ${item.nome} e esta na possição ${index} do array`)
})

const idadeMedia = allStudentsAge / students.length


console.log(`A idade Média dos alunos é de ${idadeMedia.toFixed(0)} anos`)

//toFixed() serve para controlar as casas decimais