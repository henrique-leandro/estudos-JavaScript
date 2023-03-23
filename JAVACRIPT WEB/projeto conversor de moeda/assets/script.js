const bandeira = document.querySelector(".bandeira")
const selectCurrent = document.querySelector(".select-current")
const currentText = document.querySelectorAll('.current-text')[1]
const currentValue = document.querySelectorAll('.current-value')[1]
const button = document.querySelector('button')




const changeCurrent = () => {
    
if(selectCurrent.value == "US$ Dólar Americano"){

   bandeira.setAttribute('src', 'assets/bandeira-eua.svg')
   currentText.innerHTML = 'Dólar Americano'
   currentValue.innerHTML = 'US$ 2.000,00'
}else{
  bandeira.setAttribute('src', 'assets/euro.svg')
  currentText.innerHTML = 'Euro'
  currentValue.innerHTML = '€ 1.800,00'
}

}


selectCurrent.addEventListener('change', changeCurrent)
