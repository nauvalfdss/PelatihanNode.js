// // di index.js 
// var readBooks = require('./callback')

// var books = [
//     {name: 'LOTR', timeSpent: 3000},
//     {name: 'Fidas', timeSpent: 2000},
//     {name: 'Kalkulus', timeSpent: 4000},
//     {name: 'Komik', timeSpent: 1000}
// ]

// readBooks(10000, function (waktuBaru) {
//     readBooks(waktuBaru, function (waktuBaru1) {
//         readBooks(waktuBaru, function (waktuBaru2) {
//             readBooks(waktuBaru, function (waktuBaru3) {
//                 readBooks(waktuBaru, function (waktuBaru4) {
//                    return waktuBaru4
//                     })
//                 })
//             })
//         })
//     });

var readBooks = require('./callback')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Komik', timeSpent: 1000}
]

// readBooks(10000, books[0], function(sisaWaktu1) {
//     if (sisaWaktu1 > 0) {
//         readBooks(sisaWaktu1, books[1], function(sisaWaktu2) {
//             if (sisaWaktu2 > 0) {
//                 readBooks(sisaWaktu2, books[2], function(sisaWaktu3) {
//                     if (sisaWaktu3 > 0) {
//                         readBooks(sisaWaktu3, books[3], function(sisaWaktu4) {
//                             if (sisaWaktu4 > 0) {
//                                 console.log("Semua buku sudah selesai dibaca.");
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });


// Best Practice atau lebih clean
// fungsi rekursif
function lanjutBaca(sisaWaktu, index) {
    if (sisaWaktu <= 0 || index >= books.length) {
        return 
    }

    readBooks(sisaWaktu, books[index], function (sisaWaktuBaru) {
        lanjutBaca(sisaWaktuBaru, index + 1)
    })
}

lanjutBaca(10000, 0)
