function sum (valor1, valor2){  // função void - vazia
    console.log(`O resultado é esse : ${valor1 + valor2}`);
}


function sub (valor1, valor2) {  // Return - função educada
    const result = valor1 - valor2
    return result
}

const resultado = sum( 20, 30)
const resultadoSub = sub(30, 4)

console.log(resultadoSub)