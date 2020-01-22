import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { retrieveMovies } from '../../services/retrieve-movies';
import { deleteMovieService } from '../../services/delete-movie-service';

import UserSubNav from '../../components/UserSubNav/UserSubNav';
import LibraryContainer from '../../components/LibraryContainer/LibraryContainer';
import ComparisonContainer from '../../components/ComparisonContainer/ComparisonContainer';
import Loader from '../../components/Loader/Loader';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

const ComparePage = (props) => {
	const [ data, setData ] = useState({
		movies: [ {} ],
		isLoading: false,
		comparison: {
			isComparing: false,
			userMovies: [ {} ]
		}
	});

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setData({ ...data, isLoading: true });
	// 		const result = await retrieveMovies();
	// 		let sleep = (milliseconds) => {
	// 			return new Promise((resolve) => setTimeout(resolve, milliseconds));
	// 		};
	// 		await sleep(750);
	// 		setData({ isLoading: false, movies: result });
	// 	};
	// 	fetchData();
	// }, []);

	let handleUserClick = (user) => {
		const fetchData = async () => {
			setData({ ...data, isLoading: true });
			const result = await retrieveMovies(user);
			let sleep = (milliseconds) => {
				return new Promise((resolve) => setTimeout(resolve, milliseconds));
			};
			await sleep(750);
			setData({ ...data, isLoading: false, movies: result });
		};
		fetchData();
	};

	let handleCompareClick = async (compareMovies) => {
		let userMovies = await retrieveMovies();

		setData({
			...data,
			comparison: {
				isComparing: true,
				userMovies: userMovies
			}
		});
	};

	return !data.comparison.isComparing ? data.movies[0] ? data.isLoading ? (
		<Loader />
	) : (
		<Div>
			<UserSubNav handleUserClick={handleUserClick} handleCompareClick={handleCompareClick} />
			<LibraryContainer
				handleMovieDetailClick={props.handleMovieDetailClick}
				movies={data.movies}
				user={props.user}
			/>
		</Div>
	) : (
		<div>
			<UserSubNav handleUserClick={handleUserClick} />
			<p>Search a user!</p>
		</div>
	) : (
		<Div>
			<UserSubNav handleUserClick={handleUserClick} />
			<ComparisonContainer userMovies={data.comparison.userMovies} compareMovies={data.movies} />
		</Div>
	);
};

export default ComparePage;
