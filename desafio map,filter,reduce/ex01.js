const companies = [
    {name:'Samsung', marketValue: 50, CEO:'Kim Hyun Suk', foundedOn: 1938},
    {name:'Microsoft', marketValue: 415, CEO:'Satya Nadella', foundedOn: 1975},
    {name:'Intel', marketValue: 117, CEO:'Brian Krzanich', foundedOn: 1968},
    {name:'Facebook', marketValue: 383, CEO:'Mark Zuckerberg', foundedOn: 2004},
    {name:'Spotify', marketValue: 30, CEO:'Daniel EK', foundedOn: 2006},
    {name:'Apple', marketValue: 845, CEO:'Tim Cook', foundedOn: 1976},   
]


const subMarketValue = company => {
   company.marketValue = company.marketValue - company.marketValue / 10

   return company
}

const fundationBefore1980 = fundation => {
   return fundation.foundedOn > 1980 
}

const sumMarketValue = (acc, current) => {
    return acc + current.marketValue
}


const result = companies.map(subMarketValue).filter(fundationBefore1980).reduce(sumMarketValue, 0)

console.log(result)