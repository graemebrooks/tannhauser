import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';

import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	justify-content: center;
`;

class SignupPage extends Component {
	constructor(props) {
		super(props);
		this.state = { message: '' };
	}

	updateMessage = (msg) => {
		this.setState({ message: msg });
	};

	render() {
		return (
			<Div className="SignupPage">
				<SignupForm
					{...this.props}
					handleSignupOrLogin={this.props.handleSignupOrLogin}
					updateMessage={this.updateMessage}
				/>
				<p>{this.state.message}</p>
			</Div>
		);
	}
}

export default SignupPage;
