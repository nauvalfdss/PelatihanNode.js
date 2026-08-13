const express = require('express');
const cors = require('cors');

const app = express();

const nilaiRoutes = require('./routes/nilaiRoutes');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
const matakuliahRoutes = require('./routes/matakuliahRoutes');

app.use(cors());

app.use(express.json()); //parsing json

app.use('/api/nilai', nilaiRoutes);
app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/api/matakuliah', matakuliahRoutes);

// health cek
app.get('/', (req, res) => {
    res.send('Api berjalan - gunakan /api/nilai, /api/mahasiswa, /api/matakuliah');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Berjalan Pada Port ${PORT}`);
    
})