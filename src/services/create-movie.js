import axios from 'axios';

export async function createMovie(movieData) {
	await axios({
		method: 'post',
		url: '/api/movies',
		data: movieData
	});
	console.log('Submiiting movie from createMovie');
}
