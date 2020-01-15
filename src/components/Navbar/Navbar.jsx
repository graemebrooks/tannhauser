import React from 'react';
import './Navbar.css';
import logo from '../../thtransparent.svg';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<div class="navbar-brand" href="#">
						<img src={logo} alt="logo" />
					</div>
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
								<div class="nav-link" href="#">
									Movie Detail <span class="sr-only">(current)</span>
								</div>
							</li>
						</Link>
						<Link to="/myMovies" style={{ textDecoration: 'none' }}>
							<li class="nav-item">
								<div class="nav-link" href="#">
									My Movies
								</div>
							</li>
						</Link>
						<li class="nav-item dropdown">
							<div
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Dropdown
							</div>
						</li>
					</ul>
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<div class="nav-link" href="#">
								Login
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
