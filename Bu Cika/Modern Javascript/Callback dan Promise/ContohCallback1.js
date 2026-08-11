function sapa(nama) {
    console.log(`Halo, ${nama}`);
}

function prosesNama(callback) {
    let nama = "Firdaus";
    callback(nama);
}

prosesNama(sapa);