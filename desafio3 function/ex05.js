// Escreva um programa onde, voce chame uma função mandando dois argumentos, 2 numeros, e a função responda qual numero é maior



const menor_e_Maior = (numberOne, numberTwo) => {

    if(numberOne > numberTwo){
        console.log(`numberOne é maior que numberTwo`)
    }else {
        console.log(`O numberTwo é maior que numberOne`)
    }
}

menor_e_Maior(35, 26)