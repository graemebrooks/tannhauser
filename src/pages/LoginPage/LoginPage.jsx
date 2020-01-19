import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	justify-content: center;

	.LoginPage {
		width: 70%;
		margin-top: 6rem;
		background: ${(props) => props.theme.pulsarPurple};
		border-radius: 10px;
		padding: 10px;
	}

	h2 {
		margin-bottom: 30px;
		margin-left: 25px;
	}

	button {
		color: white;
		width: 100%;
		background: ${(props) => props.theme.primaryGreen};
	}
`;

class LoginPage extends Component {
	state = {
		email: '',
		pw: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await userService.login(this.state);
			// Let <App> know a user has signed up!
			this.props.handleSignupOrLogin();
			// Successfully signed up - show GamePage
			this.props.history.push('/');
		} catch (err) {
			// Invalid user data (probably duplicate email)
			alert('Invalid Credentials!');
		}
	};

	render() {
		return (
			<Div>
				<div className="LoginPage">
					<h2>Log In</h2>
					<form className="form-horizontal" onSubmit={this.handleSubmit}>
						<div className="form-group">
							<div className="col-sm-12">
								<input
									type="email"
									className="form-control"
									placeholder="Email"
									value={this.state.email}
									name="email"
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-12">
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									value={this.state.pw}
									name="pw"
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-12 text-center">
								<button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
							</div>
						</div>
					</form>
				</div>
			</Div>
		);
	}
}

export default LoginPage;
