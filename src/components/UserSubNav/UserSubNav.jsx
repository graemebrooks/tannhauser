import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieSearch from '../../components/MovieSearch/MovieSearch';
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
		/* border: solid 1px ${(props) => props.theme.lightyearGray}; */
		border-radius: 10px;
		background: ${(props) => props.theme.primaryGreen};
		color: white;
		margin-left: auto;
	}
`;

const UserSubNav = (props) => {
	return (
		<Nav>
			<button className="btn btn-compare">Compare with this user</button>
		</Nav>
	);
};

export default UserSubNav;

UserSubNav.propTypes = {};
