import axios from 'axios';
import tokenService from '../utils/tokenService';

export async function createMovie(movieData) {
	await axios({
		method: 'post',
		url: '/api/movies',
		data: movieData,
		headers: {
			'Content-type': 'application/json',
			// Add this header - don't forget the space after Bearer
			Authorization: 'Bearer ' + tokenService.getToken()
		}
	});
	console.log('Submiting movie from createMovie');
}
