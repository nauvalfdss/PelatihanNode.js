var readBooksPromise = require('./promise')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
]

// readBooksPromise(10000, books[0])
//     .then(function(sisaWaktu) {
//         return readBooksPromise(sisaWaktu, books[1]);
//     })
//     .then(function(sisaWaktu) {
//         return readBooksPromise(sisaWaktu, books[2]);
//     })
//     .then(function(sisaWaktu) {
//         console.log("Semua buku selesai dibaca, sisa waktu:", sisaWaktu);
//     })
//     .catch(function() {
//         console.log("Waktu habis, tidak bisa melanjutkan membaca.");
//     });


// instruktur
// versi manual
// chaining then catch
// mulai dari 10000

// readBooksPromise(10000, books[0])
//     .then(function (sisaWaktu1) {
//         return readBooksPromise(sisaWaktu1, books[1])
//     })
//     .then(function (sisaWaktu2) {
//         return readBooksPromise(sisaWaktu2, books[1])
//     })
//     .then(function (sisaWaktu3) {
//         console.log("Semua Buku Selesai di Baca");
//     })

//     .catch (function (err) {
//         console.log("Proses Berhenti, Sisa Waktu: ", err);
//     })

// lebih clean atau best practice
function lanjutBacaPromise(waktu, index) {
    if (index >= books.length) {
        console.log("Selesai Membaca");
        return Promise.resolve()
    }

    return readBooksPromise(waktu, books[index])
        .then (function (sisaWaktu) {
            return lanjutBacaPromise(sisaWaktu, index + 1)
        })

        .catch(function (err) {
            console.log("Berhenti, Sisa Waktu: ", err);
            
        })
}

lanjutBacaPromise(10000, 0)