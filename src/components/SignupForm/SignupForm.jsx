import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

import styled from 'styled-components';

const Div = styled.div`
	width: 70%;
	margin-top: 6rem;
	background: url(https://4.bp.blogspot.com/-JW96Kj_bjP4/WbvxnOO3ooI/AAAAAAAAGXc/5JdNIwfzJBc5mofHzgWaZKNaSpmqSt1vwCLcBGAs/s1600/candy.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	border: 5px solid ${(props) => props.theme.pulsarPurple};
	border-radius: 10px;
	padding: 10px;

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

class SignupForm extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		passwordConf: ''
	};

	handleChange = (e) => {
		this.props.updateMessage('');
		this.setState({
			// Using ES2015 Computed Property Names
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await userService.signup(this.state);
			// Let <App> know a user has signed up!
			this.props.handleSignupOrLogin();
			// Successfully signed up - show GamePage
			this.props.history.push('/');
		} catch (err) {
			// Invalid user data (probably duplicate email)
			this.props.updateMessage(err.message);
		}
	};

	isFormInvalid() {
		return !(
			this.state.name &&
			this.state.email &&
			this.state.password === this.state.passwordConf &&
			this.state.password.length > 2
		);
	}

	render() {
		return (
			<Div>
				<h2>Sign Up</h2>
				<form className="form-horizontal" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<div className="col-sm-12">
							<input
								type="text"
								className="form-control"
								placeholder="Name"
								value={this.state.name}
								name="name"
								onChange={this.handleChange}
							/>
						</div>
					</div>
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
								value={this.state.password}
								name="password"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12">
							<input
								type="password"
								className="form-control"
								placeholder="Confirm Password"
								value={this.state.passwordConf}
								name="passwordConf"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12 text-center">
							<button className="btn btn-default" disabled={this.isFormInvalid()}>
								Sign Up
							</button>&nbsp;&nbsp;
						</div>
					</div>
				</form>
			</Div>
		);
	}
}

export default SignupForm;
