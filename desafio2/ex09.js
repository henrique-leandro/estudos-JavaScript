 //[ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

 const numberOne = 31;
 const numbertwo = 35;
 const numberthree = 23;
 const numberfour = 5;

 if(numberOne % 2 === 0 && numbertwo % 2 === 0 && numberthree % 2 === 0 && numberfour % 2 === 0) {
    console.log("Todos o numeros são pares")
 }else if (numberOne % 2 !== 0 && numbertwo % 2 !== 0 && numberthree % 2 !== 0 && numberfour % 2 !== 0){
    console.log("Todos os numeros são impares")
 }else {
    console.log("tem numeros pares e impares")
 }