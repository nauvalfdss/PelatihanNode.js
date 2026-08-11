var filterBooksPromise = require('./promise2')
// lanjutkan code untuk menjalankan function filterBooksPromise

// 1. bukunya berwarna dan jumlah halaman nya 50
// menggunakan promise (then/cacth)
filterBooksPromise(true, 50)
    .then((books) => {
        console.log("Buku Berwarna dengan 50 halaman: ", books);
    })
    .catch((err) => {
        console.error(err.message);   
    })

// 2. buku tidak berwarna dan jumlah halamanya 250 (gunakan async/await untuk kondisi ini)

async function cariBukuHitamPutih250() {
    try {
        const books = await filterBooksPromise(false, 250)
        console.log("Buku Tidak Berwarna dengan 250 Halaman : ", books);
    } catch (err) {
        console.error(err.message);
    }
}

cariBukuHitamPutih250();

// 3. Bukunya berwarna dan jumlah halamannya 30 (gunakan async/await untuk kondisi ini)
async function cariBukuTidakTersedia() {
    try {
        const books = await filterBooksPromise(true, 30);
        console.log("Buku di Temukan : ", books);
    } catch (err) {
        console.error(err.message);
    }
}
 cariBukuTidakTersedia();