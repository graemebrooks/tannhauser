import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
	border: solid 2px ${(props) => props.theme.royRed};
	background: ${(props) => props.theme.subNavGray};
	display: flex;
	flex-direction: column;
	width: 40%;
	form {
		display: flex;
		flex-direction: column;
		padding: 5px;
		/* .checkbox > input {
			height: 25px;
			width: 25px;
			appearance: none;
			border: 1px solid ${(props) => props.theme.royRed};
			transition-duration: 0.3s;
			background-color: white;
		} */
	}
`;

const MovieDetailForm = (props) => {
	const [ formData, setFormData ] = useState({
		hasSeen: false,
		dateWatched: null,
		wantToWatch: false
	});

	const onFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
		console.log(formData);
	};

	let releaseYear = props.currentMovie.release_date.substring(0, 4);

	let movieData = {
		movieTitle: props.currentMovie.title,
		tmdbId: props.currentMovie.id,
		movieReleaseYear: releaseYear,
		movieDirector: '',
		moviePlotSummary: props.currentMovie.overview,
		moviePosterUrl: `http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`,
		watchedStatus: formData.hasSeen === 'on' ? true : false,
		wantToWatchStatus: formData.wantToWatch === 'on' ? true : false,
		userDateWatched: formData.dateWatched,
		userRating: 99
	};

	return (
		<Div>
			<form>
				<label className="checkbox">
					<input onChange={onFormChange} type="checkbox" name="hasSeen" />
					<span> Have Seen</span>
				</label>
				<label className="">
					<input onChange={onFormChange} type="date" name="dateWatched" />
					<span> Date Seen</span>
				</label>
				<label onChange={onFormChange} className="checkbox">
					<input type="checkbox" name="wantToWatch" />
					<span> Want to Watch</span>
				</label>
				<button onClick={(e) => props.handleMovieDetailSubmit(e, movieData)} className="btn btn-danger">
					Submit
				</button>
			</form>
		</Div>
	);
};

export default MovieDetailForm;

MovieDetailForm.propTypes = {
	currentMovie: PropTypes.object.isRequired,
	handleMovieDetailSubmit: PropTypes.func.isRequired
};
