function multi(firstNumber, seccondNumber){
    return firstNumber * seccondNumber
}

function sum(firstNumber, seccondNumber){
    return firstNumber + seccondNumber
}

const person = {
    name: "henrique",
    age: 24
}

module.exports = {multi, sum, person}


// caso eu queria deixar esse arquivo visivel para outros arquivos e conseguir usar as funçoes que eu escrevi aqui em outro arquivo