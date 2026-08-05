// Class Parent atau Orang Tuanya 
class Parent {
    constructor(greeting) {
        this.greeting = greeting; //properti
    }
    // Method
    parentSay(){
        console.log(`${this.greeting} this is the parent class`);
        
    }
}

// Class Child - Anak
class Child extends Parent{
    constructor(greeting, name){
        super(greeting);
        this.name = name;
    }
    // Method buat anaknya sendiri
    childSay(){
        console.group(`${this.greeting} , ${this.name} this is the child class`);
    }
}

// instantiate
var parent1 = new Parent("Hai");
parent1.parentSay();

var child2 = new Child("Hello", "Firdaus");
child2.childSay();