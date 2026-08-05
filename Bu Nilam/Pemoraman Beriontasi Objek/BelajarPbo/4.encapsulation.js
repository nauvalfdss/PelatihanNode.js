

// class Car{
//     constructor(brand){
//         this._carname = brand;
//     }

//     get carname(){
//         return this._carname;
//     }

//     set carname(x){
//         this._carname = x;
//     }
// }

// // instantiate
// newcar = new Car('Pajero');
// console.log(newcar.carname);

// Classs private #Hanya bisa di akses dalam class
class Car{
    #carname;
    constructor(brand){
        this.#carname = brand;
    }

    get carname(){
        return this.#carname = X;
    }
}


newcar = new Car('Pajero');
console.log(newcar.#carname);