// escreva um programa onde, voce chame uma função eviando um numero, a função deve imprimir na tela os numeros de 1 ate o numero que voce enviou



const printNumber = number => {
    for(let i = 1; i <= number; i++){
        console.log(i)
    }
}


printNumber(8)