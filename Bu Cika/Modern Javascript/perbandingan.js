// callback hell
function panggilPasien(nomer, callback) {
    setTimeout(() => {
        console.log(`Memanggil Pasien Nomer ${nomer}`);
        callback();
    }, 1000);
}

panggilPasien(1, () => {
    panggilPasien(2, () => {
        panggilPasien(3, () => {
            console.log("Semua Pasien Sudah dipanggil");
            
        })
    })
});

// promise
// function panggilPasienpromise(nomer, callback) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         console.log(`Memanggil Pasien Nomer ${nomer}`);
//         resolve();
//     }, 1000);
//     });
// }

// panggilPasienpromise(1)
//     .then(() => panggilPasienpromise(2))
//     .then(() => panggilPasienpromise(3))
//     .then(() => {
//         console.log("Semua Pasien Sudah diPanggil");        
//     });

// pake then cath looping
// let chain = Promise.resolve();
// for (let i = 1; i <= 3; i++) {
//     chain  = chain.then( ()=> panggilPasienpromise(i)) 
// }
// chain.then( () => {
//     console.log("semua pasien sudah dipanggil");
    
// })

// async/await (paling bersih)
function panggilPasienpromise(nomer, callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log(`Memanggil Pasien Nomer ${nomer}`);
        resolve();
    }, 1000);
    });
}

// async function jalankanAntrian(){
//     await panggilPasienpromise(1);
//     await panggilPasienpromise(2);
//     await panggilPasienpromise(3);
//     console.log("Semua Pasien Sudah dipangil");
    
// }

// atau pakai looping
async function jalankanAntrian() {
    for (let i = 1; i < 3; i++) {
    await panggilPasienpromise(i);
}
console.log("Semua pasien sudah dipanggil");
}
jalankanAntrian();
 

