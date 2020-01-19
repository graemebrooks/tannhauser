import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { retrieveMovies } from '../../services/retrieve-movies';
import { deleteMovieService } from '../../services/delete-movie-service';

import MoviesSubNav from '../../components/MoviesSubNav/MoviesSubNav';
import LibraryContainer from '../../components/LibraryContainer/LibraryContainer';

const Div = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

const MyMoviesPage = (props) => {
	const [ data, setData ] = useState({
		movies: [ {} ],
		isLoading: false
	});

	useEffect(() => {
		const fetchData = async () => {
			setData({ ...data, isLoading: true });
			const result = await retrieveMovies();
			setData({ ...data, movies: result });
		};
		fetchData();
		setData({ ...data, isLoading: false });
	}, []);

	const deleteMovie = (movieId) => {
		deleteMovieService(movieId);
		console.log('deleting...');
		setData({ ...data, movies: data.movies.filter((movie) => movie._id !== movieId) });
	};

	return data.isLoading ? (
		<div>Loading</div>
	) : (
		<Div>
			<MoviesSubNav
				movies={props.movies}
				value={props.value}
				onChangeHandler={(e) => props.onChangeHandler(e)}
				handleMovieDetailClick={props.handleMovieDetailClick}
				clearSearch={props.clearSearch}
			/>
			<LibraryContainer deleteMovie={deleteMovie} movies={data.movies} />
		</Div>
	);
};

export default MyMoviesPage;
