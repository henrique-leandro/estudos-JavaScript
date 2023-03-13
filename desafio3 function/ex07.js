// Faça um programa onde, voce chame uma função que calcule a taxa mensal de juros de um investimento.

// voce deve enviar como argumento da função o valor inicial investido - valor atual do investimento - tempo em meses que o valor esta investido, a função deve RETORNAR a taxa de juros, ja formatada ex: 2,5%. siga a formula desse video para te auxiliar com o cálculo.

// calculo taxa = juros(valor atual do investimento - valor inicial investido) / valor inicial investido * tempo


function calculate(valorIncial, valorAtual, tempo){
    
    const juros = (valorAtual -  valorIncial) / (valorIncial * tempo)

    console.log((juros * 100).toFixed(2) + '%')
}


calculate(1000, 1200, 10)