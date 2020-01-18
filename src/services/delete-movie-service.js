import axios from 'axios';
import tokenService from '../utils/tokenService';

export async function deleteMovieService(movieId) {
	await axios({
		method: 'delete',
		url: `/api/movies/${movieId}`,
		headers: {
			'Content-type': 'application/json',
			// Add this header - don't forget the space after Bearer
			Authorization: 'Bearer ' + tokenService.getToken()
		}
	});
	console.log('Deleting movie from DB with deleteMovieService');
}
