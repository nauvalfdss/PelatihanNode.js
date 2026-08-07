function filterBooksPromise(colorful, amountOfPage) {
    return new Promise((resolve, reject) => {
        var books = [
            {nama: "Shincan", totalPage:50, isColorful: true},
            {nama: "Kalkulus", totalPage:250, isColorful: false},
            {nama: "Doraemon", totalPage:50, isColorful: true},
            {nama: "Algoritma", totalPage:250, isColorful: false},
        ]
        if (amountOfPage >= 40) {
            resolve(books.filter(x=> x.totalPage == amountOfPage && x.isColorful ==colorful ));
        } else {
            var reason = new Error("Maaf buku dibawah 40 halaman tidak tersedia")
            reject(reason);
        }
    });
}

module.exports = filterBooksPromise