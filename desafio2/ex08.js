//// ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.



let mynumber = 27;

if (mynumber % 2 === 0) {

    if (mynumber % 5 === 0) console.log(`O numero ${mynumber} é par e divisivel por 5`)
    else console.log(`O numero ${mynumber} é par e NÃO e divisivel por 5`)
} else {

    for (let i = 2; i < mynumber; i++)
        if (mynumber % i === 0) {
          console.log("O numero é impar, mas não é primo")
          break
        } else {
            if(i === mynumber - 1) console.log("O numero é primo")
    }
}
