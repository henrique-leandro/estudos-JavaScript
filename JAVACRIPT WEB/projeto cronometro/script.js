let btnStart = document.querySelector('#btn-start')
let btnStop = document.querySelector('#btn-stop')
let btnReset = document.querySelector('#btn-reset')

let mili = document.querySelector("#mili")
let segundos = document.querySelector('#segundos')
let minutos = document.querySelector('#minutos')
let horas = document.querySelector('#horas')

let startTimer
let ms = "00"
let seg = "00"
let min = "00"
let hr = "00"

function Start() {
    startTimer = setInterval(() => {
        ms++

        if (ms == 100) {
            seg++

            if (seg < 10) {
                seg = "0" + seg
            }

            ms = 0
        }

        if (seg == 60) {
            min++
            seg = 0

            if (min < 10) {
                min = "0" + min
            }

        }

        if (min == 60) {
            hr++
            min = "00"
            if (hr < 10) {
                hr = "0" + hr
            }
        }

        btnStart.classList.add("ativo")
        btnStop.classList.remove("ativo")

        atualizaValor()

    }, 10);


}

function atualizaValor() {
    mili.innerHTML = ms
    segundos.innerHTML = seg
    minutos.innerHTML = min
    horas.innerHTML = hr
}

function Stop() {
    clearInterval(startTimer)
    btnStop.classList.add("ativo")
    btnStart.classList.remove("ativo")
}

function Reset() {
    clearInterval(startTimer)
   ms = "00"
   seg = "00"
   min = "00"
   hr = "00"
   
   atualizaValor()
   btnStart.classList.remove("ativo")
   btnStop.classList.remove("ativo")
}

btnStart.addEventListener('click', Start);
btnStop.addEventListener('click', Stop);
btnReset.addEventListener('click', Reset);