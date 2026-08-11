const express = require('express');
const cors = require('cors');

const app = express();

const movieRoutes = require('./routes/movieRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(cors());

app.use(express.json()); //parsing json

app.use('/api/movies', movieRoutes);
app.use('/api/categories', categoryRoutes);

// health cek
app.get('/', (req, res) => {
    res.send('Api berjalan - gunakan /api/movies atau /api/categories');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Berjalan Pada Port ${PORT}`);
    
})