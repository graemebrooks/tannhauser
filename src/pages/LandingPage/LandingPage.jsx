import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	color: white;
	height: 85vh;
	width: 100vw;
	img {
		width: 500px;
		height: 500px;
		border: 5px solid ${(props) => props.theme.pulsarPurple};
		border-radius: 10px;
	}
	.signupBox {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		background: url(https://4.bp.blogspot.com/-JW96Kj_bjP4/WbvxnOO3ooI/AAAAAAAAGXc/5JdNIwfzJBc5mofHzgWaZKNaSpmqSt1vwCLcBGAs/s1600/candy.jpg);
		background-size: 150%;
		background-repeat: no-repeat;
		background-position: center center;
		border: 5px solid ${(props) => props.theme.pulsarPurple};
		border-radius: 10px;
		padding: 15px;
		width: 500px;
		height: 500px;
	}
	.signupText {
		background: ${(props) => props.theme.subNavGray};
		border: 5px solid ${(props) => props.theme.pulsarPurple};
		padding: 10px;
		border-radius: 10px;
	}
	link {
		width: 30%;
	}
	.btn-landing {
		background: ${(props) => props.theme.pulsarPurple};
		color: white;
		width: 100%;
		&:hover {
			background: ${(props) => props.theme.primaryGreen};
		}
	}
`;

const LandingPage = (props) => {
	return (
		<Div>
			<motion.img src="https://i.imgur.com/Cwb6HA5.png" />
			{props.user ? (
				<div className="signupBox">
					<div className="signupText">
						<h2>Welcome back, {props.user.name}!</h2>
						<p>
							Tannhauser is an application that allows you to track, rate, and share both the movies
							you've seen, and want to see, in one seamless single page application. Tannhauser, a
							universe of film to explore!
						</p>
					</div>
				</div>
			) : (
				<div className="signupBox">
					<div className="signupText">
						<h2>Sign Up Today!</h2>
						<p>
							Tannhauser is an application that allows you to track, rate, and share both the movies
							you've seen, and want to see, in one seamless single page application. Tannhauser, a
							universe of film to explore!
						</p>
					</div>
					<Link to="/signup" style={{ textDecoration: 'none' }}>
						<button className="btn btn-landing">Sign Up</button>
					</Link>
					<Link to="/login" style={{ textDecoration: 'none' }}>
						<button className="btn btn-landing">Log In</button>
					</Link>
				</div>
			)}
		</Div>
	);
};

export default LandingPage;
