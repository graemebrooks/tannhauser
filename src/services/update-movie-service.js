import axios from 'axios';
import tokenService from '../utils/tokenService';

export async function updateMovie(movieData, movieId) {
	console.log('Submiting movie from updateMovie');
	await axios({
		method: 'put',
		url: `/api/movies/${movieId}`,
		data: movieData,
		headers: {
			'Content-type': 'application/json',
			// Add this header - don't forget the space after Bearer
			Authorization: 'Bearer ' + tokenService.getToken()
		}
	});
}
