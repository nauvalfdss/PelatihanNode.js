require('dotenv').config();

const express = require('express');
const app = express();

// routes
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const movieRoutes = require('./routes/movieRoutes');

// middlewares global, untuk parsing json body
app.use(express.json());

// mount routes
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/movies', movieRoutes);

// basic errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error'});
});

// start 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Berjalan pada port ${PORT}`);
    
})
