import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '../../App.css';
import { utilsSearch } from '../../utils/movie-api-search';
import userService from '../../utils/userService';
import { createMovie } from '../../services/create-movie';
import { updateMovie } from '../../services/update-movie-service';
import Navbar from '../../components/Navbar/Navbar';

// Import Pages

import MyMoviesPage from '../MyMoviesPage/MyMoviesPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import LandingPage from '../LandingPage/LandingPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

const theme = {
	primaryGreen: '#11e996',
	pulsarPurple: '#642fd6',
	orbitalOrange: '#ef9145',
	backgroundBlack: '#282828',
	subNavGray: '#1f1f1f',
	lightyearGray: '#999999',
	galacticGold: '#ebc334',
	royRed: '#e02835',
	radonRust: '#75161d'
};

class App extends React.Component {
	state = {
		movieSearch: {
			movies: [],
			loading: false,
			value: ''
		},
		currentMovie: {},
		user: userService.getUser()
	};

	search = async (val) => {
		this.setState({ movieSearch: { loading: true } });
		const TMDB_DATA_URL = `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=d367945c5d4ae69f54ff775f0d01eb45`;
		const res = await utilsSearch(`${TMDB_DATA_URL}`);
		const movies = res;
		this.setState({ movieSearch: { ...this.state.movieSearch, movies: movies, loading: false } });
	};

	clearSearch = () => {
		this.setState({
			movieSearch: {
				movies: [],
				loading: false,
				value: ''
			}
		});
	};

	onChangeHandler = async (e) => {
		this.search(e.target.value);
		this.setState({ value: e.target.value });
	};

	handleMovieDetailClick = (movie) => {
		console.log('handling detail click');
		console.log(movie);
		this.setState({
			currentMovie: movie
		});
		console.log(this.state.currentMovie);
		this.clearSearch();
	};

	handleMovieDetailSubmit = (e, movieData) => {
		e.preventDefault();
		createMovie(movieData);
		this.props.history.push('/myMovies');
	};

	handleMovieDetailUpdate = (e, movieData, movieId) => {
		console.log('handle update...');
		e.preventDefault();
		updateMovie(movieData, movieId);
		this.props.history.push('/myMovies');
	};

	handleLogout = () => {
		console.log('Logging out...');
		userService.logout();
		this.setState({ user: null });
	};

	handleSignupOrLogin = () => {
		console.log(`handleSignupOrLogin`);
		this.setState({ user: userService.getUser() });
	};

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Navbar user={this.state.user} handleLogout={this.handleLogout}>
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
										clearSearch={this.clearSearch}
									/>
								)}
							/>
							<Route
								path="/movieDetail"
								exact
								render={(props) => (
									<MovieDetailPage
										user={this.state.user}
										currentMovie={this.state.currentMovie}
										handleMovieDetailSubmit={this.handleMovieDetailSubmit}
										handleMovieDetailUpdate={this.handleMovieDetailUpdate}
										{...props}
									/>
								)}
							/>
							<Route
								path="/signup"
								exact
								render={(props) => (
									<SignupPage handleSignupOrLogin={this.handleSignupOrLogin} {...props} />
								)}
							/>
							<Route
								path="/login"
								exact
								render={(props) => (
									<LoginPage handleSignupOrLogin={this.handleSignupOrLogin} {...props} />
								)}
							/>
						</Switch>
					</div>
				</Navbar>
			</ThemeProvider>
		);
	}
}

export default withRouter(App);
