// escreva um programa onde, voce chame uma função, e ela diga a hora exata!

const date = new Date()
const hora = date.getHours()
const minuto = date.getMinutes()


const tempo = () => {
    console.log(`${hora}:${minuto}`)
}


tempo()
