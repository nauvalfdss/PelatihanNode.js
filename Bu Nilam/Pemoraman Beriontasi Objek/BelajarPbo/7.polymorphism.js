class Vehicle{
    sound(){ //Menthod
        console.log("This vehicle make a sound");
    }
}

class Car extends Vehicle{
    sound(){ //Menthod
        console.log("Blarrrr...  Blarrrrrr");
    }
}

class Bike extends Vehicle{
    sound(){ //Menthod
        console.log("Tringgg.. Tringggg");
    }
}

// instantiate
var vehicle1 = new Vehicle();
vehicle1.sound();

var vehicle2 = new Car();
vehicle2.sound();

var vehicle3 = new Bike();
vehicle3.sound();