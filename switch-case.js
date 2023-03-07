// SWITCH CASE

/*
   A switch instrução é usada para executar diferentes ações com base em diferentes condições.

    A expressão switch é avaliada uma vez.
    O valor da expressão é comparado com os valores de cada caso.
    Se houver uma correspondência, o bloco de código associado será executado.
    Se não houver correspondência, o bloco de código padrão será executado.



*/
const meuNome = "Henrique";

switch (meuNome) {
    case "lucas":
        console.log("esse não é meu nome")
        break;
    case "Henrique":
        console.log(`voce acertou! meu nome é ${meuNome}`)
        break;
    default:
        console.log("nome não encontrado")
        break;
}

const temperatura = 36;

switch (temperatura) {
    case 30:  
         console.log('A pessoa esta com a temperatura MUITO abaixo do normal')
        
        break;
        
        case 33 : 
            console.log('A pessoa esta com a temperatura abaixo do normal')
        break;    

        case 36 :
            console.log('A pessoa esta com a temperatura normal')
        break; 

        case 40:
            console.log('A pessoa esta com a temperatura alta')   
        break;  

    default:
        console.log('Temperatura não indentificada')
}


