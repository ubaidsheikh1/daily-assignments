const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true, useUnifiedTopology: true });

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  release_date: Date,
  rating: Number
});

const Movie = mongoose.model('Movie', movieSchema);


Movie.aggregate([
  { $match: { genre: 'Action' } }
], (err, result) => {
  console.log(result);
});


Movie.aggregate([
  { $group: { _id: '$genre', total: { $sum: 1 } } }
], (err, result) => {
  console.log(result);
});


Movie.aggregate([
  { $sort: { rating: -1 } }
], (err, result) => {
  console.log(result);
});


Movie.aggregate([
  { $project: { title: 1, release_date: 1, _id: 0 } }
], (err, result) => {
  console.log(result);
});












