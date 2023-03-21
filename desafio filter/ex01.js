

const list = [20,3,234,12,17,514,6,87,275,1000]


const newList = list.filter( number => {
    return number % 2 === 0 && number % 5 === 0
})

console.log(newList)