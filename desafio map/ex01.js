
// criar um novo array a partir do array percorrido e verificar se a pessoa é vip ou não.
// criar uma nova propriedade no array chamada  sector e se a pessoa for vip fica no setor black e se não for fica no setor green

const list = [
    { name: 'Henrique', vip: true },
    { name: 'Evelyn', vip: false },
    { name: 'Maria', vip: true },
    { name: 'José', vip: true },
    { name: 'Pietro', vip: false },
    { name: 'Bruno', vip: true },
    { name: 'Larissa', vip: false },
];


const newList = list.map( client => {

    const newClient = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? "Black" : "Green"
    }

    return newClient
})

console.log(newList)