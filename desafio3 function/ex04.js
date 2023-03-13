// Escreva um programa onde, voce chame uma função, e ela diga que ano estamos!

const date = new Date()
const year = date.getFullYear()

    const queAnoEstamos = () => {
      console.log(`Estamos no ano de ${year}`);
    }

queAnoEstamos()