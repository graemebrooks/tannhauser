const Movie = require('../models/movie');

module.exports = {
	create,
	index
};

async function create(req, res) {
	console.log('receiving input!');
	console.log(req.body.movieTitle);
	newMovie = await new Movie({
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

async function index(req, res) {
	try {
		movies = await Movie.find({});
		console.log(movies);
		res.status(201).json(movies);
	} catch (err) {
		res.status(400).json(err);
	}
}
