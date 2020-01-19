const Movie = require('../models/movie');

module.exports = {
	create,
	index,
	delete: deleteMovie
};

async function create(req, res) {
	try {
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
			userRating: req.body.userRating,
			userId: req.body.userId
		});
		newMovie.save(function(err, movie) {
			console.log(movie);
		});
		res.status(201).json(newMovie);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function index(req, res) {
	try {
		movies = await Movie.find({});
		res.status(201).json(movies);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function deleteMovie(req, res) {
	try {
		await Movie.findByIdAndDelete(req.params.id);
	} catch (err) {
		res.status(400).json(err);
	}
}

// function deleteCritique(req, res) {
// 	User.findById(req.user._id, function(err, user) {
// 		deletedCrit = user.critiques.indexOf(req.params.id);
// 		user.critiques.splice(deletedCrit, 1);
// 		user.save(function(err, user) {});
// 	});
// 	Critique.findByIdAndDelete(req.params.id, function(err, crit) {
// 		res.redirect('/gallery');
// 	});
// }
