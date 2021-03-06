const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const MovieSchema = mongoose.Schema ({
  username: {
    type: String
  },
  moviename: {
    type: String
  },
  moviescore: {
    type: Number
  }
});

const Movie = module.exports = mongoose.model('Movie', MovieSchema);

module.exports.getMovieById = function(id, callback) {
  Movie.findById(id, callback);
}

module.exports.getMoviesByUsername = function(username, callback) {
  const query = {username: username};
  Movie.find(query, callback);
}

module.exports.addMovie = function(newMovie, callback) {
  newMovie.save(callback);
}

module.exports.deleteMovie = function(username, moviename, callback) {
  const query = {username: username, moviename: moviename};
  Movie.remove(query, callback);
}
