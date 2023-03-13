// escreba um programa onde, voce chame uma função eviando um numero (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido


const tabuada = number => {
    if(number > 10 || number < 1){
        console.log("O numero deve ser de 1 a 10")
        return
    }else {
        for(let i = 1; i <= 10; i++){
            console.log(`${number} x ${i} = ${number * i}`)
        }
    }
}


tabuada(2)