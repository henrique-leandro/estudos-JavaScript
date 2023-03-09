/*
  Funcões / Functions

  uma função é um bloco de código que é projetado para executar uma tarefa específica

*/

function mensagem() {
    console.log("estou dentro da função")
}

mensagem() // chamando a função


//argumantos e paramentros é o que colocamos dentro de ()

function soma(number1, number2) {
    console.log(number1 + number2)
}


soma(2, 3) // chamando a função



// uso do return

function multplique(number10, number20){
    return number10 * number20 // retorna a multilicação de dois numeros
}

let firstNumber = 7;
let seccondNumber = 4;

console.log(`O primeiro numero é ${firstNumber}`)
console.log(`O segundo numero é ${seccondNumber}`)

console.log(`A multiplicação dos dois numero é ${multplique(firstNumber, seccondNumber)}`)



// função anonima é quando uma variavel assume o valor de uma função ex:

const multplique = function(number10, number20){
    const result = number10 * number20
    return result
}

let firstNumber1 = 20;
let seccondNumber2 = 50;

console.log(`O primeiro numero é ${firstNumber1}`)
console.log(`O segundo numero é ${seccondNumber2}`)

const resultado = multplique(firstNumber1, seccondNumber2);

console.log(`A multiplicação dos dois numero é ${resultado}`)