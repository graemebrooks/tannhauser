import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserSearch from '../../components/UserSearch/UserSearch';
import Keys from '../../components/Keys/Keys';

const Nav = styled.nav`
	background: ${(props) => props.theme.subNavGray};
	display: flex;
	flex-direction: row;
	padding: 5px;
	width: 100%;
	height: 3rem;
	color: white;
	.btn-compare {
		border-radius: 10px;
		background: ${(props) => props.theme.pulsarPurple};
		color: white;
		margin-left: auto;
		&:hover {
			background: ${(props) => props.theme.primaryGreen};
		}
	}
`;

const UserSubNav = (props) => {
	return (
		<Nav>
			<UserSearch />
			<button className="btn btn-compare">Compare with this user</button>
		</Nav>
	);
};

export default UserSubNav;

UserSubNav.propTypes = {};
