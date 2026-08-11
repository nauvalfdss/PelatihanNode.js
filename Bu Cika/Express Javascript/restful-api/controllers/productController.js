let products = [
    { id: 1, name: 'Produk A', price: 10000},
    { id: 2, name: 'Produk B', price: 15000}
];

// menampilkan semua produk
exports.getAllProducts = (req, res) => {
    res.status(200).json(products);
};

// Menampilkan Satu Produk By Id
exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) return res.status(404).json({ message: 'Produk Tidak di Temukan'});
    res.status(200).json(product);
};

// Menambahkan Produk
exports.createProduct = (req, res) => {
    const { name, price } = req.body;

    if (!name || typeof price !== 'number') {
        return res.status(400).json({ message: 'Input tidak valid' });
    }

    const newProduct = {
        id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name,
        price
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
};

// Mengubah Produk
exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' });

    const { name, price } = req.body;

    if (!name || typeof price !== 'number') {
        return res.status(400).json({ message: 'Input tidak valid' });
    }

    product.name = name;
    product.price = price;

    res.status(200).json(product);
};


// Menghapus Produk
exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.findIndex(p => p.id === id);

    if (product === -1) return res.status(404).json({ message: 'Produk tidak ditemukan' });

    products.splice(product, 1);
    res.status(204).send();
};
