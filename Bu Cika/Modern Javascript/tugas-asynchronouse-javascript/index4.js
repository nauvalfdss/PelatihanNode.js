var filterCarsPromise = require('./promise3')

// Menggunakan then and catch
// 1. Mobil berwarna Hitam Tahun 2019
filterCarsPromise('black', 2019)
    .then((cars) => {
        console.log("Mobil Hitam Tahun 2019 : ", cars);
    })
    .catch((err) => {
        console.log(err.message);
    })

// 2. Mobil Berwarna Silver tahun 2017
filterCarsPromise('silver', 2017)
    .then((cars) => {
        console.log("Mobil Silver Tahun 2017 : ", cars);
    })
    .catch((err) => {
        console.log(err.message);
    })

// Mengggunakan async/await
// 3. Mobil berwarna Abu Abu tahun 2019 (gunakan async/await untuk kondisi ini)
async function cariMobilAbu2019() {
    try {
        const cars = await filterCarsPromise('grey', 2019);
        console.log("Mobil Abu Abu Tahun 2019");
        
    } catch (err) {
        console.error(err.message);
    }
}

cariMobilAbu2019();

// 4.Mobil berwarna Abu Tahun 2018 (gunakan asnyc/await untuk kondisi ini )
async function cariMobilAbu2018() {
    try {
        const cars = await filterCarsPromise('grey', 2018);
        console.log("Mobil Abu Abu Tahun 2018", cars);
        
    } catch (err) {
        console.error(err.message);
    }
}

cariMobilAbu2018();


// 
async function cariMobilHitam2020() {
    try {
        const cars = await filterCarsPromise('black', 2020);
        console.log("Mobil Abu Abu Tahun 2018", cars);
        
    } catch (err) {
        console.error(err.message);
    }
}

cariMobilHitam2020();