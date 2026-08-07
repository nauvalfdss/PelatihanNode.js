function filterCarsPromise(color, year) {
    return new Promise((resolve, reject) => {
        var cars = [
            {brand: "Toyota", name: "Avanza", year: 2019, color: "black"},
            {brand: "Daihatsu", name: "Xenia", year: 2017, color: "black"},
            {brand: "Lamborghini", name: "Gallardo", year: 2018, color: "black"},
            {brand: "Honda", name: "Brio", year: 2019, color: "black"},
            {brand: "Toyota", name: "Agya", year: 2020, color: "black"},
            {brand: "Honda", name: "Jazz", year: 2018, color: "black"},
            {brand: "Suzuki", name: "Ertiga", year: 2017, color: "black"},
        ]

        var filteredCars = cars.filter(x=> x.color === color && x.year === year)
        if (filteredCars.length > 0) {
            resolve(filteredCars);
        } else {
            var reason = new Error("Maaf Data Tidak di Temukan")
            reject(reason);
        }
    });
}

module.exports = filterCarsPromise