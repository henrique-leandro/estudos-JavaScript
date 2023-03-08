//[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const numberAleatory = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
const winning_Number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;


console.log(numberAleatory, "numberAleatory")
console.log(winning_Number, "winning_Number")

if(numberAleatory === winning_Number){
    console.log("PARABÉNS VOCE GANHOU!!!")
}else {
    console.log("Não foi dessa vez, Tente novamente")
}