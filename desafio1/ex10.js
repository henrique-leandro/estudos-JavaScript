//[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.


let object1 = { name: "Henrique"}
let object2 = { name: "Henrique"}

let resultado1 = object1.name ==  object2.name

console.log(resultado1);


let object3 = { primeiroNome: "Henrique", segundoNome:"Evelyn"}

let resultado2 = object3.primeiroNome == object3.segundoNome;

console.log(resultado2);