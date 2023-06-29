const cart = [10, 244, 99, 2, 20, 33, 250]

let finalValeuWithDiscount = 0
let finalValueNotDiscount = 0



function calculateDiscount(price, discount) {

    const result = (price * discount) / 100
    return result
}

function calculateTotalValue (price){
      
    return finalValueNotDiscount += price
}


cart.forEach(value => {

    if (value > 30) {

        const discount = calculateDiscount(value, 10)
        finalValeuWithDiscount += value - discount

    } else {
        finalValeuWithDiscount += value
        
    }


});


cart.forEach(valor => {
    
    calculateTotalValue (valor) 
    
})

let valueEconomized = finalValueNotDiscount - finalValeuWithDiscount



console.log(`Valor Total R$ ${finalValueNotDiscount.toFixed(2)}
Valor com Desconto R$ ${finalValeuWithDiscount.toFixed(2)}
Valor economizado R$ ${valueEconomized.toFixed(2)}`)