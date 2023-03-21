/*
  REDUCE

   Retorna um valor ( pode ser um novo array, objeto, string, number, etc)

   Aceita 4 aparametros
     1 - acumulador
     2 - valor atual
     3 - index
     4 - array completo


*/

const list = [1,2,3,4,5]



const newList = list.reduce( (acc, current) => {

    return acc + current
}, 0)

console.log(newList)

const companies = [
    {name:'Samsung', marketValue: 50, CEO:'Kim Hyun Suk', foundedOn: 1938},
    {name:'Microsoft', marketValue: 415, CEO:'Satya Nadella', foundedOn: 1975},
    {name:'Intel', marketValue: 117, CEO:'Brian Krzanich', foundedOn: 1968},
    {name:'Facebook', marketValue: 383, CEO:'Mark Zuckerberg', foundedOn: 2004},
    {name:'Spotify', marketValue: 30, CEO:'Daniel EK', foundedOn: 2006},
    {name:'Apple', marketValue: 845, CEO:'Tim Cook', foundedOn: 1976},   
]