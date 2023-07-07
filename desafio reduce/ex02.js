// 


const cart = [
{ productName: 'aboborá', pricePerkg: 5, kg: 1},
{ productName: 'Pepino', pricePerkg: 3.55, kg: 1.3},
{ productName: 'Limão', pricePerkg: 1.2, kg: 2},
{ productName: 'Abacate', pricePerkg: 5.4, kg: 1.67},
{ productName: 'Morango', pricePerkg: 11.9, kg: 3}
]


const finalValue = cart.reduce((acc, value) => {
    const  result = value.pricePerkg * value.kg

    return acc + result
}, 0)

console.log(finalValue)

//console.log(`o Valor final da sua compra foi de R$ ${finalValue.toFixed(2)}`)