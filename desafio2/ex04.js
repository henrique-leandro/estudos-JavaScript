// [ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

let num1 = 34;
let num2 = 37;
let num3 = 45;


let maior = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);


console.log(`O maior numero é ${maior}, e o menor numero é ${menor}`)

//jeito raiz abaixo

let number1 = 5;
let number2 = 10;
let number3 = 2;

let maior2 = num1;
let menor2 = num1;

if (number1 > number2 && number1 > number3) {
  maior = number1;
} else if (number2 > number3) {
  maior = number2;
} else {
  maior = number3;
}

if (number1 < number2 && number1 < number3) {
  menor = number1;
} else if (number2 < number3) {
  menor = number2;
} else {
  menor = number3;
}

console.log("O maior número é: " + maior);
console.log("O menor número é: " + menor);