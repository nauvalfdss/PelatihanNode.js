const express = require('express');
const app = express();
const port = 3000;

const moviesRouter = require('./routes/movies')

// middleware untuk parsing json
app.use(express.json());

// route sederhana
app.get('/', (req, res) => {
    res.send('Hello Word dari express!, Kelas PBL batch 3')
})

app.use('/api/movies', moviesRouter);


// menajalankan serves
app.listen(port, () => {
    console.log(`Server Berjalan di http://localhost:${port}`);
})