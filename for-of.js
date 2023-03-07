/*
 ESTRUTURA DE REPETIÇÃO - FOR OF

o for of coloca item por item, no exemplo abaixo se no console log e colocar myName ele vai pegar cada letra do meu nome
em outro exemplo no allNames ele vai repetir o array pelo numero de itens 

*/

let myName = 'Henrique';
let allNames = ["Maria", "João", "Ronaldo", "Lucas", "Henrique", "Evelyn"]

for(let letter of allNames){
    console.log(letter);
}