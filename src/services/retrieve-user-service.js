import axios from 'axios';
import tokenService from '../utils/tokenService';

export async function retrieveUsers(query) {
	try {
		console.log(query);
		let usersList = await axios({
			method: 'post',
			url: '/api/users/search',
			data: query,
			headers: {
				'Content-type': 'application/json',
				// Add this header - don't forget the space after Bearer
				Authorization: 'Bearer ' + tokenService.getToken()
			}
		}).then(
			(response) => {
				console.log(`Response from retrieveUsers: ${response.data}`);
				return response.data;
			},
			(error) => {
				console.log(error);
			}
		);
		console.log(`Response from retrieveUsers: ${typeof usersList}`);
		return usersList;
	} catch (err) {
		console.log(err);
	}
}
