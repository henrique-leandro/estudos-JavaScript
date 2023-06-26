const produtos = [100, 3, 20, 4, 300, 2, 60, 29, 9, 23]

let valorFinal = 0

function calculaDesconto(preco, desconto) {

    const resultado = (preco * desconto) / 100
    return resultado
}

produtos.forEach((preco) => {

    if( preco > 30){
        const desconto = calculaDesconto(preco, 10)
        
        valorFinal += (preco - desconto)
    }else {
       valorFinal += preco
    }
})

console.log(`O valor final da compra foi de R$ ${valorFinal.toFixed(2)}`)


/*
function desconto10(){

    for( let i = 0; i < produtos.length; i++){

        if (produtos[i] > 30) {

            const desconto = (10 * produtos[i]) / 100

     
           console.log(`O preço do produto é : ${produtos[i]} e com o desconto ficará: ${produtos[i] - desconto}`)
        }else {
            console.log("Esse produto não tem desconto")
        }
     }
}

desconto10()

*/