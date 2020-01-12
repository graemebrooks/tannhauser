import React from 'react';
import styled from 'styled-components';
import MovieSearchCard from '../MovieSearchCard/MovieSearchCard';

function MovieSearch(props) {
	return (
		<div>
			<input
				value={props.value}
				onChange={(e) => props.onChangeHandler(e)}
				placeholder="Type something to search"
			/>
			{props.movies ? (
				<ul>
					{props.movies.map((movie) => {
						return (
							<li>
								<MovieSearchCard title={movie.Title} />
							</li>
						);
					})}
				</ul>
			) : null}
		</div>
	);
}
export default MovieSearch;
