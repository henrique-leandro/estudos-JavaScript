//Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

let nota = 2

switch (nota) {
    case 0:
        console.log("Infelizmente, o trabalho apresentado não atendeu aos critérios mínimos de qualidade exigidos para avaliação")
        
        break;
    case 1:
        console.log("Este desenho não atende aos critérios mínimos de qualidade exigidos. Falhas graves na técnica e na criatividade prejudicaram o resultado final.")

        break;
    case 2:
        console.log("infelizmente, este desenho não atende aos padrões mínimos de qualidade exigidos. Vários erros técnicos e falta de criatividade tornam o trabalho difícil de avaliar positivamente")

        break;   
    case 3:
    console.log("Um desenho abaixo da média, com vários problemas técnicos e falta de originalidade. É preciso mais prática e treinamento para melhorar.")

        break; 
    case 4:
    console.log("Alguns problemas graves de execução e falta de criatividade tornam este desenho difícil de avaliar positivamente. É preciso mais prática e esforço para melhorar.")

        break; 
    case 5:
    console.log("Um desenho mediano, com problemas significativos na técnica e na composição. Ainda há muito trabalho a ser feito para melhorar.")

        break; 
    case 6:
    console.log("Há problemas notáveis de execução e falta de originalidade. Há espaço para melhoria, mas ainda assim, há alguns aspectos positivos neste desenho.")

        break; 
    case 7:
    console.log("Um bom esforço, mas com algumas falhas na técnica e na composição. Ainda assim, há muito a se apreciar neste trabalho.")

        break; 
    case 8:
    console.log("Um desenho muito bom, com técnica consistente e um bom senso de composição. Pode ser aprimorado em alguns aspectos, mas é uma obra sólida")

        break;
    case 9:
    console.log("Um desenho excelente, com técnica refinada e um estilo próprio bem desenvolvido. Há alguns pequenos erros, mas nada que tire a qualidade geral do trabalho.")

        break;
    case 10:
    console.log("Este desenho é simplesmente incrível! A técnica é impressionante, os detalhes são incrivelmente precisos e a composição é perfeita. Uma obra-prima!")
    
        break;
    default:
        console.log("Não foi dado nenhuma nota")
        break;
}

