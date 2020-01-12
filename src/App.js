import React from 'react';
import axios from 'axios';
import Movies from './components/Movies/Movies';
import logo from './logo.svg';
import MovieSearch from './components/MovieSearch/MovieSearch';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import './App.css';

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
		const OMDB_DATA_URL = `http://www.omdbapi.com/?apikey=7d472d5d&`;
		this.setState({ loading: true });
		const res = await axios(`${OMDB_DATA_URL}s=${val}`);
		console.log(res);
		const movies = res.data.Search;
		console.log(movies);
		this.setState({ movies, loading: false });
	};

	onChangeHandler = async (e) => {
		this.search(e.target.value);
		this.setState({ value: e.target.value });
	};

	get renderMovies() {
		let movies = <h1>There's no movies</h1>;
		if (this.state.movies) {
			movies = <Movies list={this.state.movies} />;
		}
		return movies;
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Navbar />
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1>Styled Components</h1>
						<MovieSearch
							movies={this.state.movies}
							value={this.state.value}
							onChangeHandler={(e) => this.onChangeHandler(e)}
							renderMovies={this.onChangeHandler}
						/>
					</header>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
