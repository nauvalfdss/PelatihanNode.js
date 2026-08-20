const express = require('express');
const cors = require('cors');

const app = express();

const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

app.use(cors());

app.use(express.json()); //parsing json

app.use('/api/mahasiswa', mahasiswaRoutes);

// health cek
app.get('/', (req, res) => {
    res.send('Api berjalan - gunakan /api/mahasiswa');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Berjalan Pada Port ${PORT}`);
    
})