import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { retrieveMovies } from '../../services/retrieve-movies';
import { deleteMovieService } from '../../services/delete-movie-service';

import UserSubNav from '../../components/UserSubNav/UserSubNav';
import LibraryContainer from '../../components/LibraryContainer/LibraryContainer';
import Loader from '../../components/Loader/Loader';

const Div = styled.div``;

const ComparePage = (props) => {
	const [ data, setData ] = useState({
		movies: [ {} ],
		isLoading: true
	});

	useEffect(() => {
		// const fetchData = async () => {
		// 	setData({ ...data, isLoading: true });
		// 	const result = await retrieveMovies();
		// 	let sleep = (milliseconds) => {
		// 		return new Promise((resolve) => setTimeout(resolve, milliseconds));
		// 	};
		// 	await sleep(750);
		// 	setData({ isLoading: false, movies: result });
		// };
		// fetchData();
	}, []);

	return data.movies[0].movieTitle ? data.isLoading ? (
		<Loader />
	) : (
		<Div>
			<UserSubNav />
			<LibraryContainer handleMovieDetailClick={props.handleMovieDetailClick} movies={data.movies} />
		</Div>
	) : (
		<div>
			<UserSubNav />
			<p>Search a user!</p>
		</div>
	);
};

export default ComparePage;
