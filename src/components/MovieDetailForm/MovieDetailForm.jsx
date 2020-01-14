import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieSearchCard from '../MovieSearchCard/MovieSearchCard';

const MovieDetailForm = () => {
	return (
		<div>
			<form>
				<input type="checkbox" name="hasSeen" />
				<input type="checkbox" name="wantsToWatch" />
				<input type="date" name="dateWatched" />
			</form>
		</div>
	);
};

export default MovieDetailForm;

MovieDetailForm.propTypes = {};
