const express = require('express');
const port = 3000;
const app = express();

// Tugas praktek 1
// Params url lingkaran-tabung/:jariJari/:Tinggi
// req.params.jariJari
// req.params.tinggi
app.get('/lingkaran-tabung/:jariJari/:tinggi', (req, res) => {
    const jariJari = parseFloat(req.params.jariJari);
    const tinggi = parseFloat(req.params.tinggi);

    const phi = 3.14;

    const luasAlas = phi * jariJari * jariJari;
    const kelilingAlas = 2 * phi * jariJari;
    const volumeTabung = luasAlas * tinggi;

    // memakai toFixed untuk mengatur brp angka dibelakang koma
    res.send(
        `jariJari: ${jariJari}, Tinggi: ${tinggi}, ` +
        `Volume Tabung: ${volumeTabung.toFixed(2)}, ` +
        `Luas Alas Tabung: ${luasAlas.toFixed(2)}, ` +
        `Keliling Alas Tabung: ${kelilingAlas.toFixed(2)}`
    )

})

// Tugas Praktek 2
// Kita coba Pakai query
app.get('/data-orang', (req, res) => {
    const {umur, gender} = req.query;

    let dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jeniskelamin: "L"},
    { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jeniskelamin: "L"},
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jeniskelamin: "P"},
    { id: 9, name: "Shohe", umur: 28, pekerjaan: "Pemain Baseball", jeniskelamin: "L"},
    { id: 11, name: "Maria", umur: 35, pekerjaan: "Petenis", jeniskelamin: "P"},
   ];

   let filtered = dataOrang;

   if (umur) {
        filtered = filtered.filter(item => item.umur >= parseInt(umur));
   }

   if (gender) {
        filtered = filtered.filter(item => item.jeniskelamin.toLowerCase() === gender.toLowerCase());
   }

//Jika Tidak Ada Hasil
   if (filtered.length === 0) {
        return res.send("Tidak ada data yang sesuai");
   }

//Kalau ada hasilnya
// Format Hasil
// Tambahkan ini .join("<br>"); untuk membuat hasilnya bikin baris baru
const hasil = filtered.map( (item, index) =>
    `${index + 1}. ${item.name} - Pekerjaan: ${item.pekerjaan} - Umur: ${item.umur} Tahun` 
).join("<br>");

res.send(hasil);

})
// Menjalankan di Browser Kalau Makai Query
// http://localhost:3000/data-orang?umur=30&gender=L Filter berdasar Umur dan Gender

// Menjalankan di Browser Kalau Makai Params Url
// http://localhost:3000/data-orang/umur/gender


// Tugas Praktek 3
// 
app.get('/data-orang/:id', (req, res) => {
    const id = parseInt(req.params.id);

    let dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jeniskelamin: "L"},
    { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jeniskelamin: "L"},
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jeniskelamin: "P"},
    { id: 9, name: "Shohe", umur: 28, pekerjaan: "Pemain Baseball", jeniskelamin: "L"},
    { id: 11, name: "Maria", umur: 35, pekerjaan: "Petenis", jeniskelamin: "P"},
   ];

   const orang = dataOrang.find(item => item.id === id);

   if (!orang) {
     return res.send("Maaf Data Tidak di Temukan");
   }


// if else bisa di persingkat dengan tempory 
   const sapaan = orang.jeniskelamin === "L" ? "Pak" : "Bu";

   res.send(`${sapaan} ${orang.name} Adalah Seorang ${orang.pekerjaan} yang Berusia ${orang.umur} Tahun`);


})

// menjalankan serves
app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
})