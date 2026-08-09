class Car{
    constructor(brand){
        this.brand = brand; //property
    }
    info(){ //method
        console.log(`Car Brand : ${this.brand}.`)
    }
}

module.exports = Car;
