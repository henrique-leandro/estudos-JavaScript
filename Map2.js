




const numbers = [1,2,3,4,5];

const students = [
    {nome: "henrique", age: 24},
    {nome: "joão", age: 21},
    {nome: "lucas", age: 12},
    {nome: "maria", age: 45},
    {nome: "gabriel", age: 34},
    {nome: "bruna", age: 17}
];


const duoble = number => number * 2;
const toReais = number => `R$ ${number.toFixed(2)}`


const newArray = numbers.map(duoble).map(toReais)

console.log(newArray)