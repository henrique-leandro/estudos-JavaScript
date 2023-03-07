//[ ] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.

let min = Math.ceil(1);
let max = Math.floor(100);
let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
// floor serve para arrendodar o numero quebrado para "baixo"
// ceil para arrendodar numeros quebrados para "cima"

console.log(resultado);