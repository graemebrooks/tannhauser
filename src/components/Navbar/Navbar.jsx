import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../../thtransparent.svg';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	let authNav =
		props.user === null ? (
			<ul className="navbar-nav ml-auto">
				<Link to="/signup">
					<li className="nav-item">
						<div className="nav-link">Signup</div>
					</li>
				</Link>
				<Link to="/login">
					<li className="nav-item">
						<div className="nav-link">Login</div>
					</li>
				</Link>
			</ul>
		) : (
			<ul className="navbar-nav ml-auto">
				<Link to="/">
					<li className="nav-item">
						<div className="nav-link" onClick={props.handleLogout}>
							Logout
						</div>
					</li>
				</Link>
			</ul>
		);

	return (
		<div>
			<nav className="navbar navbar-expand-lg">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<div className="navbar-brand" href="#">
						<img src={logo} alt="logo" />
					</div>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<FontAwesomeIcon icon={faBars} />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<Link to="" style={{ textDecoration: 'none' }}>
							<li className="nav-item active">
								<div className="nav-link">
									Dashboard <span className="sr-only">(current)</span>
								</div>
							</li>
						</Link>
						<Link to="/myMovies" style={{ textDecoration: 'none' }}>
							<li className="nav-item">
								<div className="nav-link">Library</div>
							</li>
						</Link>
					</ul>
					{authNav}
				</div>
			</nav>
			{props.children}
		</div>
	);
};

export default Navbar;
