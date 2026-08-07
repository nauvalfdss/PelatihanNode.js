var readBooksPromise = require('./promise')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent:4000}
]

readBooksPromise(10000, books[0])
    .then(function(sisaWaktu) {
        return readBooksPromise(sisaWaktu, books[1]);
    })
    .then(function(sisaWaktu) {
        return readBooksPromise(sisaWaktu, books[2]);
    })
    .then(function(sisaWaktu) {
        console.log("Semua buku selesai dibaca, sisa waktu:", sisaWaktu);
    })
    .catch(function() {
        console.log("Waktu habis, tidak bisa melanjutkan membaca.");
    });