const express = require('express');
// membuat router 
const router = express.Router();

// data dummy

let movies = [
    {id:1, title : 'Inception', year: 2010},
    {id:2, title : 'Interstellar', year: 2014},
    {id:3, title : 'Furry', year: 2020},
    {id:4, title : 'Code', year: 2021},
]

// Read All
router.get('/', (req, res) => {
    res.json(movies);
})

// Read by ID
// memakai parseInt agar lebih aman
router.get('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).json({message: 'Movie not found'}); 
    res.json(movie);
})

// create
router.post('/', (req, res) => {
    const newMovie = {
        id: movies.length + 1,
        title: req.body.title,
        year: req.body.year
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
})


// update
router.put('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).json({message: 'Movie not found'}); 

    movie.title = req.body.title || movie.title;
    movie.year = req.body.year || movie.year;

    res.json(movie);
})

// delete
router.delete('/:id', (req, res) => {
    movies = movies.filter(m => m.id !== parseInt(req.params.id));
    res.status(204).end();
})

module.exports = router;