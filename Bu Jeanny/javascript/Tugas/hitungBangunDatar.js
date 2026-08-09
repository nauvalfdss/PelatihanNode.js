//  FUNGSI PERHITUNGAN LUAS 
function luasPersegi(sisi) {
  return sisi * sisi;
}

function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

function luasLingkaran(r) {
  // Menggunakan Math.PI agar presisi, lalu dipotong 2 desimal
  return (Math.PI * r * r).toFixed(2);
}

function luasSegitiga(alas, tinggi) {
  return 0.5 * alas * tinggi;
}

//  FUNGSI PERHITUNGAN KELILING 
function kelilingPersegi(sisi) {
  return 4 * sisi;
}

function kelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

function kelilingLingkaran(r) {
  return (2 * Math.PI * r).toFixed(2);
}

function kelilingSegitigaSamaSisi(sisi) {
  return 3 * sisi;
}

// DATA TETAP 
const dataPersegi = { sisi: 8 };
const dataPersegiPanjang = { panjang: 9, lebar: 3 };
const dataLingkaran = { r: 6 };
const dataSegitiga = { alas: 6, tinggi: 4, sisi: 6 };

// Menampilkan hasil 
console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====\n");

// Luas Bangun Datar
console.log(">> Luas Bangun Datar <<");
console.log(`Luas Persegi Dengan Sisi ${dataPersegi.sisi} Adalah ${luasPersegi(dataPersegi.sisi)}`);
console.log(`Luas Persegi Panjang Dengan Panjang ${dataPersegiPanjang.panjang} Dan Lebar ${dataPersegiPanjang.lebar} Adalah ${luasPersegiPanjang(dataPersegiPanjang.panjang, dataPersegiPanjang.lebar)}`);
console.log(`Luas Lingkaran Dengan Jari - jari ${dataLingkaran.r} Adalah ${luasLingkaran(dataLingkaran.r)}`);
console.log(`Luas Segitiga Dengan Alas ${dataSegitiga.alas} Dan Tinggi ${dataSegitiga.tinggi} Adalah ${luasSegitiga(dataSegitiga.alas, dataSegitiga.tinggi)}\n`);

// Keliling Bangun Datar
console.log(">> Keliling Bangun Datar <<");
console.log(`Keliling Persegi Dengan Sisi ${dataPersegi.sisi} Adalah ${kelilingPersegi(dataPersegi.sisi)}`);
console.log(`Keliling Persegi Panjang Dengan Panjang ${dataPersegiPanjang.panjang} Dan Lebar ${dataPersegiPanjang.lebar} Adalah ${kelilingPersegiPanjang(dataPersegiPanjang.panjang, dataPersegiPanjang.lebar)}`);
console.log(`Keliling Lingkaran Dengan Jari - Jari ${dataLingkaran.r} Adalah ${kelilingLingkaran(dataLingkaran.r)}`);
console.log(`Keliling Segitiga Dengan Sisi ${dataSegitiga.sisi} Adalah ${kelilingSegitigaSamaSisi(dataSegitiga.sisi)}`);