import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { retrieveMovies } from '../../services/retrieve-movies';
import { deleteMovieService } from '../../services/delete-movie-service';

import MoviesSubNav from '../../components/MoviesSubNav/MoviesSubNav';
import LibraryContainer from '../../components/LibraryContainer/LibraryContainer';
import Loader from '../../components/Loader/Loader';

const Div = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
	@media (max-width: 768px) {
		height: 100vh;
		width: 100vw;
	}
`;

const MyMoviesPage = (props) => {
	const [ data, setData ] = useState({
		movies: [ {} ],
		isLoading: true
	});

	useEffect(() => {
		const fetchData = async () => {
			setData({ ...data, isLoading: true });
			const result = await retrieveMovies();
			let sleep = (milliseconds) => {
				return new Promise((resolve) => setTimeout(resolve, milliseconds));
			};
			await sleep(1000);
			setData({ isLoading: false, movies: result });
		};
		fetchData();
	}, []);

	const deleteMovie = (movieId) => {
		deleteMovieService(movieId);
		console.log('deleting...');
		setData({ ...data, movies: data.movies.filter((movie) => movie._id !== movieId) });
	};

	return data.isLoading ? (
		<Loader />
	) : data.movies[0] ? (
		<Div>
			<MoviesSubNav
				movies={props.movies}
				value={props.value}
				onChangeHandler={(e) => props.onChangeHandler(e)}
				handleMovieDetailClick={props.handleMovieDetailClick}
				clearSearch={props.clearSearch}
			/>
			<LibraryContainer
				handleMovieDetailClick={props.handleMovieDetailClick}
				deleteMovie={deleteMovie}
				movies={data.movies}
			/>
		</Div>
	) : (
		<Div>
			<MoviesSubNav
				movies={props.movies}
				value={props.value}
				onChangeHandler={(e) => props.onChangeHandler(e)}
				handleMovieDetailClick={props.handleMovieDetailClick}
				clearSearch={props.clearSearch}
			/>

			<h2>Add some movies!</h2>
		</Div>
	);
};

export default MyMoviesPage;
