// // Membuat class dengan nama car
// class Car {
//     // Membuat Property dengan nama brand
//     constructor(brand)
//     {
//         this.brand = brand;
//     }
// }

// // instantiate dari class car - Objek 1
// var mobil1 = new Car('Mitsubishi');
// console.log(mobil1.brand);

// // Membuat Objek 2
// var mobil2 = new Car('Toyota')
// console.log(mobil2.brand);

// Latihan 
// Membuat Class dengan Nama Peserta( Nama, Umur, ProgLat)
// Manual
// class Peserta {
//     constructor(data)
//     {
//         this.data = data;
//     }
// }

// var nama = new Peserta('Muhammmad Nauval Firdaus');
// console.log(nama.data);

// var umur = new Peserta('19 Tahun');
// console.log(umur.data);

// var proglat = new Peserta('Pengembangan Web dengan Node.js dan React');
// console.log(proglat.data);

// Cara Sederhana
class Peserta {
    constructor(nama, umur, proglat){
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
    }
}

// instantiate
var peserta1 = new Peserta('Firdaus', '19 Thn', 'Web');
console.log(peserta1.nama, peserta1.umur, peserta1.proglat);
