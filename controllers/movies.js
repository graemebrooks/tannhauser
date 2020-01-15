const fetch = require('node-fetch');
const Movie = require('../models/movie');

const OMDB_DATA_URL = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&`;

module.exports = {
	create,
	testConnect
};

async function create(req, res) {
	console.log('receiving input!');
	console.log(req.body.movieTitle);
	newMovie = new Movie({
		movieTitle: req.body.movieTitle,
		tmdbId: req.body.tmdbId,
		movieReleaseYear: req.body.movieReleaseYear,
		movieDirector: req.body.movieDirector,
		moviePlotSummary: req.body.moviePlotSummary,
		moviePosterUrl: req.body.moviePosterUrl,
		watchedStatus: req.body.watchedStatus,
		wantToWatchStatus: req.body.wantToWatchStatus,
		userDateWatched: req.body.userDateWatched,
		userRating: req.body.userRating
	});
	newMovie.save(function(err, movie) {
		console.log(movie);
	});
}

function testConnect(req, res) {
	console.log('Connected');
	res.send('Connected!');
}
