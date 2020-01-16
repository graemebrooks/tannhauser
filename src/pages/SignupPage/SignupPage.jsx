import React from 'react';
import styled from 'styled-components';

import SignupForm from '../../components/SignupForm/SignupForm';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;

	h1 {
		color: white;
	}
`;

const SignupPage = (props) => {
	return (
		<Div>
			<h1>Signup Page</h1>;
			<SignupForm />
		</Div>
	);
};

export default SignupPage;
