// A prefeirura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salario e numero de filhos, A prefeitura deseja saber: média do salario da população; media do numero de filhos; maior salario; O final da leitura de dados se dará com a entrada de um salario negativo - faça isso usando uma função

const peopleOfCity = [
  {
      salario: 1650,
      numFilhos: 3
  },
  {
      salario: 4560,
      numFilhos: 5
  },
  {
      salario: 1700,
      numFilhos: 1
  },
  {
      salario: 200,
      numFilhos: 0
  },
  {
    salario: -1000,
    numFilhos: 0

  }

]
  
  
  function encontreOMaiorSalario(informacoesDasPessoas){
      let salarioMedio = 0
      let mediaDeFilhos = 0
      let maiorSalario = 0
  
      for (let i = 0; i <= informacoesDasPessoas.length; i++) {
          
          const salario =  informacoesDasPessoas[i].salario
          const numFilhos = informacoesDasPessoas[i].numFilhos
  
          if(salario > maiorSalario) maiorSalario = salario
  
          if(salario < 0 ) {
              console.log(`Média do salario R$ ${(salarioMedio / i ).toFixed(0)}`)
              console.log(`Média de filhos ${(mediaDeFilhos / i ).toFixed(0)}`)
              console.log(`Maior Salario R$ ${maiorSalario}`)
              console.log(i)
              break
          } else {
            salarioMedio += salario;
            mediaDeFilhos += numFilhos
          }
      }
  }
  
  encontreOMaiorSalario(peopleOfCity)

