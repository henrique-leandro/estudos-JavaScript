//nos parametros do addEventListener coloca primeiro o evendo depois a função


const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')

input.addEventListener('focus', () => {
    console.log('Dei um foco')
})

select.addEventListener('change', () => {
    console.log(select.value)
})

button.addEventListener('click', () => {
    console.log('FUI CLICADO')
})