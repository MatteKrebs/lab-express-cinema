const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then((movies) => {
        res.render('movies', { movies });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id;

//     Movie.findById(movieId, (err, movie) => {
//       res.render('movie-id', { movie });
//     });
//   });

module.exports = router;
