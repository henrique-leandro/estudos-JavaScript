//[ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

const myArray = [{
    nome: "Henrique",
    idade: 24,
    sexo: "Masculino",
    profissão: "Programador",
    nacionalidade: "Brasil"
},

 {
    nome: "Evelyn",
    idade: 22,
    sexo: "Feminino",
    profissão: "Empresaria",
    nacionalidade: "Brasil"
},

{
    nome: "Lucas",
    idade: 26,
    sexo: "Masculino",
    profissão: "advogado",
    nacionalidade: "Alemanha"
},

{
    nome: "Maria",
    idade: 45,
    sexo: "Feminino",
    profissão: "Domestica",
    nacionalidade: "Brasil"
},

{
    nome: "João",
    idade: 32,
    sexo: "Masculino",
    profissão: "Médico",
    nacionalidade: "Argentina"

}

]




for(let objeto of myArray){
   
    if(objeto.idade > 18 && objeto.nacionalidade === "Brasil"){
        console.log(`${objeto.nome} foi APROVADO(A) no processo`)
    }else {
        console.log(`${objeto.nome} NÃO foi aprovado(a) no processo`)
    }
}