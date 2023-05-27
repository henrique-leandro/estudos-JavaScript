let divNumerosSorteados = document.getElementById('numeros-sorteados'); // Seleciona a div que conterá os números sorteados
let btnSorteio = document.getElementById('btn-sorteio'); // Seleciona o botão "Sortear"
let textSorteio = document.getElementById('textSort')

let numerosSorteados = []; // Array para armazenar os números sorteados

function generatorNumber() {
    const min = Math.ceil(document.querySelector('#min-input').value);
    const max = Math.floor(document.querySelector('#max-input').value);
    const result = Math.floor(Math.random() * (max - min + 1) + min);

    numerosSorteados.push(result); // Adiciona o número sorteado ao array

    let numberText = document.createElement('p');
    numberText.className = "numero-sorteados";
    numberText.innerHTML = result;

    divNumerosSorteados.appendChild(numberText); // Adiciona o número sorteado à div

    if (numerosSorteados.length >= 10) {
        alert("Limite de Números Sorteados Atingido!!!");
        btnSorteio.disabled = true;
    }
    
    if(numerosSorteados.length > 1){
       textSorteio.innerHTML = "Números Sorteados"
    }
}

function deleteResult() {
    numerosSorteados = []; // Limpa o array de números sorteados
    divNumerosSorteados.innerHTML = ""; // Limpa o conteúdo da div
    textSorteio.innerHTML = "Sortear Número"

    btnSorteio.disabled = false; // Habilita o botão "Sortear" novamente
}