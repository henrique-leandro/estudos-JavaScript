/*
THIS

this em ingles significa =  este, isso, esta


no JavaScript , o this faz referencia: 

Node => module.exports
web => window

escopo: 
  ==> global --> Quando começamos a escrever nossa aplicação
     No contexto global o this faz referencia ao objeto global, que é o objeto window no navegador de internet ou ao objeto global no Node.js


===> Local : Por exemplo dentro de uma função
*/



const person = {
    name: "Henrique",
    age: 24,
    talk: function (){
        console.log(this.name)
    }
}

person.talk()

