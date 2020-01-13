import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '../../App.css';
import { utilsSearch } from '../../utils';
import Navbar from '../../components/Navbar/Navbar';

// Import Pages

import MyMoviesPage from '../MyMoviesPage/MyMoviesPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import LandingPage from '../LandingPage/LandingPage';

const theme = {
	primaryGreen: '#11e996',
	secondaryOrange: '#ef9145',
	backgroundBlack: '#282828'
};

class App extends React.Component {
	state = {
		movies: null,
		loading: false,
		value: ''
	};

	search = async (val) => {
		console.log('Searching...');
		this.setState({ loading: true });
		const TMDB_DATA_URL = `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=d367945c5d4ae69f54ff775f0d01eb45`;
		const res = await utilsSearch(`${TMDB_DATA_URL}`);
		console.log(res);
		const movies = res;
		console.log(movies);
		this.setState({ movies, loading: false });
	};

	onChangeHandler = async (e) => {
		this.search(e.target.value);
		this.setState({ value: e.target.value });
	};

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Router>
					<Navbar />
					<div className="App">
						<Switch>
							<Route path="/" exact render={(props) => <LandingPage {...props} />} />
							<Route
								path="/myMovies"
								render={(props) => (
									<MyMoviesPage
										{...props}
										movies={this.state.movies}
										value={this.state.value}
										onChangeHandler={this.onChangeHandler}
									/>
								)}
							/>
							<Route path="/movieDetail" exact render={(props) => <MovieDetailPage {...props} />} />
						</Switch>
					</div>
				</Router>
			</ThemeProvider>
		);
	}
}

export default App;
