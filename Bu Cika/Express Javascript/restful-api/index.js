const express = require('express');
const app = express();
const productRoutes = require('./routes/products');

app.use(express.json());
app.use('/products', productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server RESTful berjalan di http://localhost:${PORT}`);
});