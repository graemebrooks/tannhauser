import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
	border: solid 2px ${(props) => props.theme.royRed};
	background: ${(props) => props.theme.subNavGray};
	display: flex;
	flex-direction: column;
	width: 40%;
	form {
		display: flex;
		flex-direction: column;
		padding: 5px;
	}
`;

const SignupForm = (props) => {
	const [ formData, setFormData ] = useState({
		hasSeen: false,
		dateWatched: null,
		wantToWatch: false
	});

	const onFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
		console.log(formData);
	};

	return (
		<Div>
			<form>
				<label onChange={onFormChange} className="checkbox">
					<input type="checkbox" name="wantToWatch" />
					<span>Name</span>
				</label>
				<button className="btn btn-danger">Submit</button>
			</form>
		</Div>
	);
};

export default SignupForm;

SignupForm.propTypes = {};
