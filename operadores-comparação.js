// OPERADORES DE COMPARAÇÃO


/*

  == : Igual // ele compara o valor mas não o tipo do valor;

  === : Igualdade restrita // compara o valor e o tipo do valor;

  != : diferente // ele compara o valor mas não o tipo do valor;

  !== : Totalmente diferente // ele compara o valor e o tipo do valor;

  > : Maior que // compara dois numeros
  < : Menor que // compara dous numeros

  >= : Maior ou igual // compara para ver se o numero da esquerda é maior ou igual ao da direita
  <= : Menor ou igual // compara para ver se o numero da esquerda é menor ou igual ao da direita
*/


let firstName = "Henrique";
let seccondName = "Evelyn"

const resultOne = firstName == seccondName; // == : Igual ele compara o valor mas não o tipo do valor;
console.log(resultOne);

const resultTwo = firstName === seccondName; //  === : Igualdade restrita // compara o valor e o tipo do valor;
console.log(resultTwo);


let ageOne = 23;  
let ageTwo = "23";

const resultThree = ageOne != ageTwo; // != : diferente // ele compara o valor mas não o tipo do valor;
console.log(resultThree);

const resultFour = ageOne !== ageTwo //  !== : Totalmente diferente // ele compara o valor e o tipo do valor;
console.log(resultFour);


let numberOne = 10;
let numberTwo = 23;

const resultNumberOne = numberOne > numberTwo //  > : Maior que // compara dois numeros
console.log(resultNumberOne);


const resultNumberTwo = numberOne < numberTwo // < : Menor que // compara dous numeros
console.log(resultNumberTwo);


const resultNumberThree = numberOne >= numberTwo // >= : Maior ou igual // compara para ver se o numero da esquerda é maior ou igual ao da direita
console.log(resultNumberThree);

const resultNumberFour = numberOne <= numberTwo //<= : Menor ou igual // compara para ver se o numero da esquerda é menor ou igual ao da direita
console.log(resultNumberFour);

