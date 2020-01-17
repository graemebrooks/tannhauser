import axios from 'axios';

export async function deleteMovieService(movieId) {
	await axios({
		method: 'delete',
		url: `/api/movies/${movieId}`
	});
	console.log('Deleting movie from DB with deleteMovieService');
}
