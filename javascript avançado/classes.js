/*
 CLASSES


*/

/*const person = {
    name: "Henrique",
    age: 24,
    talk : function() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

person.talk() */


class People {
   constructor(name, age){
    
    console.log(`Hello, I'm ${name}`)


    this.name = name
    this.age = age
   }

   talk(){
    console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`)
   }

}

const newPeople = new People('Henrique Sales', 24)
const newPeople1 = new People('Evelyn', 21)
const newPeople2 = new People('Maria', 20)
const newPeople3 = new People('Lucas', 22)

newPeople.talk()