import axios from 'axios';

export async function retrieveMovies() {
	try {
		let moviesList = await axios.get('/api/movies/index').then(
			(response) => {
				console.log(`Response from retrieveMovies: ${response.data}`);
				return response.data;
			},
			(error) => {
				console.log(error);
			}
		);
		console.log(`Response from retrieveMovies: ${moviesList[0].movieTitle}`);
		return moviesList;
	} catch (err) {
		console.log(err);
	}
}
