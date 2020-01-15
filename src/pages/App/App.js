import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '../../App.css';
import { utilsSearch } from '../../utils/movie-api-search';
import { createMovie } from '../../services/create-movie';
import Navbar from '../../components/Navbar/Navbar';

// Import Pages

import MyMoviesPage from '../MyMoviesPage/MyMoviesPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import LandingPage from '../LandingPage/LandingPage';

const theme = {
	primaryGreen: '#11e996',
	secondaryOrange: '#ef9145',
	backgroundBlack: '#282828',
	subNavGray: '#4d4d4d',
	galacticGold: '#ebc334',
	royRed: '#e02835'
};

class App extends React.Component {
	state = {
		movieSearch: {
			movies: null,
			loading: false,
			value: ''
		},
		currentMovie: {}
	};

	search = async (val) => {
		this.setState({ movieSearch: { loading: true } });
		const TMDB_DATA_URL = `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=d367945c5d4ae69f54ff775f0d01eb45`;
		const res = await utilsSearch(`${TMDB_DATA_URL}`);
		const movies = res;
		this.setState({ movieSearch: { ...this.state.movieSearch, movies: movies, loading: false } });
	};

	onChangeHandler = async (e) => {
		this.search(e.target.value);
		this.setState({ value: e.target.value });
	};

	handleMovieDetailClick = (movie) => {
		this.setState({
			currentMovie: movie
		});
	};

	handleMovieDetailSubmit = (e, movieData) => {
		e.preventDefault();
		createMovie(movieData);
		console.log('Detail Submit!');
	};

	testExpressConnection = () => {
		fetch('/api/movies/testConnect').then((res) => {
			console.log('connection established...');
		});
	};

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Router>
					<Navbar />
					<div className="App">
						<Switch>
							<Route
								path="/"
								exact
								render={(props) => (
									<LandingPage {...props} testExpressConnection={this.testExpressConnection} />
								)}
							/>
							<Route
								path="/myMovies"
								render={(props) => (
									<MyMoviesPage
										{...props}
										movies={this.state.movieSearch.movies}
										value={this.state.movieSearch.value}
										onChangeHandler={this.onChangeHandler}
										handleMovieDetailClick={this.handleMovieDetailClick}
									/>
								)}
							/>
							<Route
								path="/movieDetail"
								exact
								render={(props) => (
									<MovieDetailPage
										currentMovie={this.state.currentMovie}
										handleMovieDetailSubmit={this.handleMovieDetailSubmit}
										{...props}
									/>
								)}
							/>
						</Switch>
					</div>
				</Router>
			</ThemeProvider>
		);
	}
}

export default App;
