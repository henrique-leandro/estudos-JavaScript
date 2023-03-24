const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


const dolar = 5.2
const euro = 6






const convertValues = () => {
  const inputReais = document.getElementById('input-reais').value
  const realValueText = document.getElementById('real-value-text')
  const currencyValueText = document.getElementById('currency-value-text')



  //realValueText.innerHTML = inputReais

  realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency',
     currency: 'BRL' }
  ).format(inputReais)

    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency',
     currency: 'USD' }
  ).format(inputReais / dolar)

}
    /*
    euro
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency',
     currency: 'EUR' }
  ).format(inputReais / euro)
    */
  

  //  currencyValueText.innerHTML = (inputReais / dolar)
 
const changeCurrency = () => {
  
  const currencyName = document.getElementById('currency-name')
  const currencyImg= document.getElementById('currency-img')

  if(select.value == 'US$ Dólar Americano'){

    currencyName.innerHTML = 'Dólar Americano'
    currencyImg.setAttribute('src', 'assets/bandeira-eua.svg')
  }

  if(select.value == '€ Euro'){
    currencyName.innerHTML = '€ Euro'
    currencyImg.setAttribute('src', 'assets/euro.svg')
  }
    
    
  }

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)