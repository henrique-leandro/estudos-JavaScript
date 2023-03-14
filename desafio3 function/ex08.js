/* escreva um programa onde voce cria uma função geradora de desconto

// a função aceita 4 parametros ( nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleano que diz se o cliente vai pagar a vista ou não)

// os descontos funcionam da seguinte forma:
1
// Se é a primeira compra do cliente, pagar a vista, e a compra for maior que 1000 = 30% de desconto

se é a primeira compra do cliente, paga a vista, e a compra for menor que 1000 e maior que 500 = 25% de desconto

se é a primeira compra do cliente, paga a vista e a compra for menor que 500 = 20% de desconto



2
se é a primeira compra do cliente, Não vai pagar a vista, e a compra for maior que 1000 = 20% de desconto

se é a primeira compra do cliente, Não vai pagar a vista e a compra for menor que 1000 e maior que 500 = 15% de desconto

se é a primeira compra do cliente, Não pegar a vista e a compra for menor que 500 = 10% de desconto


3
se não é a primeira compra do cliente, paga a vista, e a compra for maior que 1000 = 20% de desconto

se não é a primeira compra do cliente, pagar a vista e a compra for menor que 1000 e maior que 500 = 15% de desconto

se não é a primeira compra, pagar a vista e a compra for menor que 500 = 10% desconto

4
se não é a primeira compra do cliente, não pagar a vista e a compra for maior que 1000 = 10% de desconto

se não é a primeira compra, não pagar a vista, e a compra for menor que 1000 e maior que 500 = 5% desconto

se não é a primeira compra do cliente, não pegar a vista e a compra for menor que 500 = sem desconto 
a função deve imprimir na tela:


se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu

se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto, esse cupom deve ser um valor aleatório entre 10 e 20% para a proxima compra.


*/

function calcularDesconto(nome, valor, primeiraCompra, pagamentoAvista) {

    let desconto30 = valor * 0.3;
    let desconto25 = valor * 0.25;
    let desconto20 = valor * 0.2;
    let desconto15 = valor * 0.15;
    let desconto10 = valor * 0.1
    let desconto5 = valor * 0.05;

    if (primeiraCompra && pagamentoAvista) {

        if (valor > 1000) {
            console.log(nome + " Voce ganhou 30% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto30}`)

        } else if (valor < 1000 && valor > 500) {
            console.log(nome + " voce ganhou 25% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto25}`)
        } else {
            console.log(nome + " voce ganhou 20% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto20}`)
        }
    }

    if (primeiraCompra && !pagamentoAvista) {

        if (valor > 1000) {
            console.log(nome + " voce ganhou 20% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto20}`)
        } else if (valor < 1000 && valor > 500) {
            console.log(nome + " voce ganhou 15% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto15}`)
        } else {
            console.log(nome + " voce ganhou 10% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto10}`)
        }
    }

    if (!primeiraCompra && pagamentoAvista) {

        if (valor > 1000) {
            console.log(nome + " voce ganhou 20% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto20}`)

        } else if (valor < 1000 && valor > 500) {
            console.log(nome + " voce ganhou 15% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto15}`)
        } else {
            console.log(nome + " voce ganhou 10% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto10}`)
        }
    }

    if (!primeiraCompra && !pagamentoAvista) {
        
        let cupom = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

        if (valor > 1000) {
            console.log(nome + " voce ganhou 10% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto10}`)

        } else if (valor < 1000 && valor > 500) {
            console.log(nome + " voce ganhou 5% de desconto")
            console.log(`Valor total sem desconto: R$${valor}`)
            console.log(`Valor total com desconto R$${valor - desconto5}`)

        } else {
            console.log(nome + " Não recebe desconto")
            console.log(`valor total da compra ${valor}`)
            console.log(`voce recebeu um cupom de ${cupom}% na proxima compra`)
        }
    }

}


calcularDesconto('Henrique', 100, false, false)