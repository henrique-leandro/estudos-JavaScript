/*
   - Selecionando Elementos:
   
     -getElementByid() : seleciona apenas um elemento

     -getElementByClassName() : seleciona diversos elementos (HTML collection) colocasse [] e o numero da possição do html Collection se quiser selecionar apenas um

     -getElementByTagName() : seleciona diversos elementos (HTML collection)


     - querySelector : seleciona apenas um elemento / o primeiro que encontrar (element)
     - querySelectorAll : seleciona todos os elementos que encontrar (NodeList)

     -NodeList X HTML Collection

*/
// getElementById
const element = document.getElementById("maintext").innerHTML

console.log(element)

//getElementByClassName
const element2 = document.getElementsByClassName("paragraph")[1].innerHTML

console.log(element2)

//getElementByTagName
const element3 = document.getElementsByTagName('p')

console.log(element3)


const element4 = document.querySelector('p')

element4.innerHTML = 'EU MUDEI ESSE TEXTO'

console.log(element4.innerHTML)

const element5 = document.querySelectorAll('p')

console.log(element5)

