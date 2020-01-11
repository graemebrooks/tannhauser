const request = require('request');
const Movie = require('../models/movie');

const ROOT_URL = '';

module.exports = {
	create,
	delete: deleteMovie,
	update
};

// function create(req, res) {
// 	request(`${ROOT_URL}${req.body.artId}`, function(err, response, body) {
// 		artObj = JSON.parse(body);
// 		newCritique = new Critique({
// 			critic: req.user.name,
// 			criticId: req.user._id,
// 			publishDate: new Date(),
// 			artworkImage: artObj.primaryImageSmall,
// 			artistName: artObj.artistDisplayName,
// 			artworkPublishDate: artObj.objectEndDate,
// 			artworkTitle: artObj.title,
// 			critiqueTitle: req.body.title,
// 			critiqueBody: req.body.critiqueBody,
// 			critiqueRating: req.body.rating
// 		});
// 		User.findById(req.user._id, function(err, user) {
// 			user.critiques.push(newCritique._id);
// 			user.save(function(err, user) {
// 				res.redirect(`/critiques/${newCritique._id}`);
// 			});
// 			newCritique.save(function(err, crit) {});
// 		});
// 	});
// }

// function deleteMovie(req, res) {
// 	User.findById(req.user._id, function(err, user) {
// 		deletedCrit = user.critiques.indexOf(req.params.id);
// 		user.critiques.splice(deletedCrit, 1);
// 		user.save(function(err, user) {});
// 	});
// 	Critique.findByIdAndDelete(req.params.id, function(err, crit) {
// 		res.redirect('/gallery');
// 	});
// }

// function update(req, res) {
// 	Critique.findByIdAndUpdate(req.params.id, req.body, function(err, crit) {
// 		res.redirect('/gallery');
// 	});
// }
