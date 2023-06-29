
const result = document.querySelector('.result')
let humanScore = document.querySelector('#human-score')
let machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0 

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}


const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Machine: ' + machine)

    if (human == machine) {
        result.innerHTML = 'Deu Empate!'
    } else if (human === 'paper' && machine === 'rock' || human === 'rock' && machine === 'scissors' || human === 'scissors' && machine === 'paper') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Voce ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Voce perdeu para a Maquina!"
    }
}