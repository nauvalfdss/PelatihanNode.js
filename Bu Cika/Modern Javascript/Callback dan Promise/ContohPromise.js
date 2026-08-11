function panggilPasien(nomer){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if (nomer < 10){
                resolve(`pasien nomer ${nomer}, Silahkan Masuk`); //value
            }else{
                reject(`Pasien Nomer ${nomer} Tidak ada di daftar antrian`); //reason
            }   
        }, 1000);
    });
}  

// Memakai .then .cacth
// panggilPasien(11)
//     .then((pesan) => {
//         console.log("Succes:", pesan);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });
    
// memakai async await
async function prosesAntrian() {
try {
console.log("Mengecek nomor antrian...");
const hasil = await panggilPasien(0); // Tunggu sampai Promise selesai
console.log("SUCCESS:", hasil);
} catch (error) {
console.error("ERROR:", error);
}
}
prosesAntrian();