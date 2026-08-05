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
        cekScore(){
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

    module.exports = Peserta;