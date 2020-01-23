import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../../thtransparent.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	let authNav =
		props.user === null ? (
			<ul className="navbar-nav ml-auto">
				<Link to="/signup" style={{ textDecoration: 'none' }}>
					<li className="nav-item">
						<motion.div className="nav-link" whileTap={{ scale: 0.9 }}>
							Signup
						</motion.div>
					</li>
				</Link>
				<Link to="/login" style={{ textDecoration: 'none' }}>
					<li className="nav-item">
						<motion.div className="nav-link" whileTap={{ scale: 0.9 }}>
							Login
						</motion.div>
					</li>
				</Link>
			</ul>
		) : (
			<ul className="navbar-nav ml-auto">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<li className="nav-item">
						<motion.div className="nav-link" onClick={props.handleLogout} whileTap={{ scale: 0.9 }}>
							Logout
						</motion.div>
					</li>
				</Link>
			</ul>
		);

	return (
		<div>
			<nav className="navbar navbar-expand-lg">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<motion.div className="navbar-brand" whileTap={{ scale: 0.9 }}>
						<img src={logo} alt="logo" />
					</motion.div>
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
					{props.user && (
						<ul className="navbar-nav mr-auto">
							{/* <Link to="/dashboard" style={{ textDecoration: 'none' }}>
								<li className="nav-item active">
									<motion.div className="nav-link" whileTap={{ scale: 0.9 }}>
										Dashboard <span className="sr-only">(current)</span>
									</motion.div>
								</li>
							</Link> */}
							<Link to="/myMovies" style={{ textDecoration: 'none' }}>
								<li className="nav-item">
									<motion.div className="nav-link" whileTap={{ scale: 0.9 }}>
										Library
									</motion.div>
								</li>
							</Link>
							<Link to="/compare" style={{ textDecoration: 'none' }}>
								<li className="nav-item">
									<motion.div className="nav-link" whileTap={{ scale: 0.9 }}>
										Compare
									</motion.div>
								</li>
							</Link>
						</ul>
					)}
					{authNav}
				</div>
			</nav>
			{props.children}
		</div>
	);
};

export default Navbar;
