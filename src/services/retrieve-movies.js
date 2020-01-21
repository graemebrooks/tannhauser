import axios from 'axios';
import tokenService from '../utils/tokenService';

export async function retrieveMovies(user) {
	try {
		console.log(user);
		let moviesList = await axios({
			method: 'get',
			url: user ? `/api/movies/compareIndex/${user._id}` : '/api/movies/index',
			headers: {
				'Content-type': 'application/json',
				// Add this header - don't forget the space after Bearer
				Authorization: 'Bearer ' + tokenService.getToken()
			}
		}).then(
			(response) => {
				console.log(`Response from retrieveMovies: ${response.data}`);
				return response.data;
			},
			(error) => {
				console.log(error);
			}
		);
		console.log(`Response from retrieveMovies: ${typeof moviesList}`);
		return moviesList;
	} catch (err) {
		console.log(err);
	}
}
