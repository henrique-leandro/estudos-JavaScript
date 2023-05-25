let divNova = document.createElement("div") // cria uma nova div no html

function generatorNumber() {

    const min = Math.ceil(document.querySelector('#min-input').value) // aredonda o primeiro numero para baixo
    const max = Math.floor(document.querySelector('#max-input').value) // arredonda o segundo numero para cima 

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    let btnSorteio = document.getElementById('btn-sorteio')
    let numeroSorteado = document.getElementsByClassName('numerosSorteados')


    let numberText = document.createElement('p') // cria o texto que vai ficar dentro da div
    numberText.className = "numerosSorteados" // colocando uma class no elemento p
    numberText.innerHTML = result // insere o numero sorteado na tela

    numberText.className = "numerosSorteados" // colocando uma class no elemento p
    numberText.innerHTML = result // insere o numero sorteado na tela

    divNova.id = 'numeroSorteado' // coloca um id para a divNova
    divNova.appendChild(numberText);

    let textSortear = document.getElementById("textSort");
    document.body.insertBefore(divNova, textSortear);
    textSortear.innerHTML = "Número Sorteado"

    if (numeroSorteado.length >= 10) {

        alert("Limite de Numeros Sorteados Atingido!!!")
        btnSorteio.disabled = true
        //alert("Limite de Numeros Sorteados Atingido!!!")
    }

    if (numeroSorteado.length >= 2) {

        textSortear.innerHTML = "Números Sorteados"
    }

}

function deleteResult() {
    numeroSorteado.innerHTML = ""
    textSortear.innerHTML = "Sortear Número"

    if(numeroSorteado.innerHTML == ""){
        btnSorteio.disabled = false
    }
}