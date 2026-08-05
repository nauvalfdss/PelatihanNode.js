class Orang{
    constructor(nama){
        this.nama = nama;
    }
    // membuat getter
    get nama(){
        console.log("Mengambil Nama");
        return this._nama;
    }
    // Membuat Setter
    set nama(value){
        console.log("Mengubah Nama.....");
        if (value.length < 3){
            console.log("Nama Terlalu Pendek");
        }
        else {
            this._nama = value;
        }
    }
}

// instantiate
var orang1 = new Orang("Firdaus");
console.log(orang1.nama);

// orang1.nama = "Fir";
// console.log(orang1.nama);


