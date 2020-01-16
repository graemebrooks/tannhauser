import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../../thtransparent.svg';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
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
							<Link to="/movieDetail" style={{ textDecoration: 'none' }}>
								<li className="nav-item active">
									<div className="nav-link">
										Movie Detail <span className="sr-only">(current)</span>
									</div>
								</li>
							</Link>
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
							<li className="nav-item dropdown">
								<div
									className="nav-link dropdown-toggle"
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
						<ul className="navbar-nav ml-auto">
							<Link to="/signup">
								<li className="nav-item">
									<div className="nav-link">Login</div>
								</li>
							</Link>
						</ul>
					</div>
				</nav>
				{this.props.children}
			</div>
		);
	}
}

export default Navbar;
