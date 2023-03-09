/*

  ARROW FUNCTION

 */

  // função anonima 

  const soma = function(firstNumber, seccondNumber){
    const result = firstNumber + seccondNumber

    return result
  }


  // Arrow function

const somar = (firstNumber, seccondNumber) => firstNumber + seccondNumber
// se o codigo precisa ser maior na arrow function ela perder o super poder de não colocar o return, ai vai precisar colocar o return

let firstNumber = 20;
let seccondNumber = 50;

console.log(`O primeiro numero é ${firstNumber}`)
console.log(`O segundo numero é ${seccondNumber}`)

const resultado = somar(firstNumber, seccondNumber);

console.log(`A multiplicação dos dois numeros é ${resultado}`)