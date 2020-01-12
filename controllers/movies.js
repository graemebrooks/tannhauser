const fetch = require('node-fetch');
const Movie = require('../models/movie');

const OMDB_DATA_URL = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&`;

module.exports = {
	create
};

async function create(req, res) {
	let movieData;
	try {
		movieData = await fetch(`${OMDB_DATA_URL}t=shrek`).then((res) => res.json());
		console.log(movieData);
		res.send(movieData);
	} catch (err) {
		console.log(err);
		res.send(err);
	}
}
