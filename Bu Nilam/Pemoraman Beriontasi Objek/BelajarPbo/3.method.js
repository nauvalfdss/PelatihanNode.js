// // Membuat Method didalam Class
// class Car{
//     // Membuat Method (kasih nama method wajib kasih ())
//     sound(){
//         return "Blarrr.. Blarrrrrrr..";
//     }
// }
// // instantiate
// var mobil1 = new Car();
// console.log(mobil1.sound());

// // Membuat Method dengan paramater
// class Car{
//     // Method
//     sound(x){
//          return x + ", Suara Mobil saya Blarrrrrr..";
//     }
// }

// // instantiate
// var mobil1 = new Car();
// console.log(mobil1.sound("Haiii..."));

// // Membuat Class dengan Property dan Method
// class Laptop{
//     constructor(merek, baterai){
//         this.merek = merek;
//         this.baterai = baterai;
//     }
//     // Method
//     cekBaterai(){
//         if (this.baterai >=80)
//         console.log(`${this.merek} : baterai penuh ${this.baterai}%`) 
//     }
// }

// // Instantiate
// var laptop1 = new Laptop("Asus", 90);
// laptop1.cekBaterai();

// Latihan2
// Latihan membuat class dnegan property dan method
// Tambahkan Property : nilai pada class peserta
// Tambahkan Method : Grade
// >90 sangat baik
// > 80 : baik
// > 70 : cukup
// > 60 : Kurang
// < 60 : Tidak Lulus

class Peserta{
    constructor(nama, umur, proglat, nilai){
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this.nilai = nilai;
    }
    
        // Setter
            set nilai(nilai) {
                if (nilai < 0 || nilai > 100) {
                    console.log("Nilai harus berada di antara 0 - 100");
                    this._nilai = null;
                } else {
                    this._nilai = nilai;
                }
            }
        // Menthod
        grade(){
             console.log(`Nama    : ${this.nama}`);
             console.log(`Umur    : ${this.umur}`);
             console.log(`Proglat : ${this.proglat}`);
            if (this.nilai >=90)
                console.log(` Nilai Anda = ${this.nilai}  ( sangat baik )`)
            else if (this.nilai >=80)
                console.log(` Nilai Anda = ${this.nilai} ( baik ) `)
            else if (this.nilai >=70)
                console.log(` Nilai Anda = ${this.nilai} ( cukup ) `)
            else if (this.nilai >=60)
                console.log(` Nilai Anda = ${this.nilai} ( Kurang ) `)
            else if (this.nilai <=60)
                console.log(` Nilai Anda = ${this.nilai} ( Tidak Lulus )`)
        }
    }

// instantiate
var peserta1 = new Peserta('Firdaus', 19, 'web', -1);
peserta1.grade();
  