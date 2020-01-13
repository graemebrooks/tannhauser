import React from 'react';
import './Navbar.css';
import logo from '../../thtransparent.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<a class="navbar-brand" href="#">
						<img src={logo} />
					</a>
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<Link to="/movieDetail" style={{ textDecoration: 'none' }}>
							<li class="nav-item active">
								<a class="nav-link" href="#">
									Movie Detail <span class="sr-only">(current)</span>
								</a>
							</li>
						</Link>
						<Link to="/myMovies" style={{ textDecoration: 'none' }}>
							<li class="nav-item">
								<a class="nav-link" href="#">
									My Movies
								</a>
							</li>
						</Link>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#">
									Action
								</a>
								<a class="dropdown-item" href="#">
									Another action
								</a>
								<div class="dropdown-divider" />
								<a class="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
					</ul>
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a class="nav-link" href="#">
								Login
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
