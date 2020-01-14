const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
	{
		movieTitle: {
			type: String
		},
		movieReleaseYear: {
			type: String
		},
		movieDirector: {
			type: String
		},
		moviePlotSummary: {
			type: String
		},
		moviePosterUrl: {
			type: String
		},
		watchedStatus: {
			type: String
		},
		userDateWatched: {
			type: Date
		},
		userRating: {
			type: Number,
			min: 1,
			max: 100
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Movie', movieSchema);
