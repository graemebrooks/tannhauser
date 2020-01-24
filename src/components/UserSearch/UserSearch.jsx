import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { retrieveUsers } from '../../services/retrieve-user-service';

const Input = styled.input`
	background: ${(props) => props.theme.lightyearGray};
	padding: 5px;
	margin: 3px;
	border: 2px solid ${(props) => props.theme.pulsarPurple};
	border-radius: 5px;
	color: white;
	width: 40%;
	&:focus {
		outline: none !important;
		border: 2px solid ${(props) => props.theme.primaryGreen};
		background: ${(props) => props.theme.backgroundBlack};
	}
`;

const Div = styled.div`
	width: 100%;
	ul {
		background: ${(props) => props.theme.backgroundBlack};
		border: solid 2px ${(props) => props.theme.pulsarPurple};
		max-height: 500px;
		overflow-y: auto;
		z-index: 5;
		position: absolute;
		width: 60%;
		list-style-type: none;
		padding: 0;
	}
	li:hover {
		background: ${(props) => props.theme.pulsarPurple};
	}
	h3 {
		margin: 0;
	}
`;

function UserSearch(props) {
	const [ searchData, setSearchData ] = useState({
		users: [ {} ],
		selectedUser: {}
	});

	const [ searchValue, setSearchValue ] = useState({
		value: ''
	});

	let onUserSearchChange = async (e) => {
		setSearchValue({ ...searchData, value: e.target.value });
		if (searchValue.value === '') {
			setSearchData({ ...searchData, users: [ {} ] });
		}
		if (e.target.value.length > 1) {
			let users = await retrieveUsers({ name: e.target.value });
			setSearchData({ ...searchData, users: users });
		}
	};

	let clearUserSearch = () => {
		setSearchValue({ value: '' });
		setSearchData({
			users: [ {} ],
			selectedUser: {}
		});
	};

	useEffect(() => {
		return () => clearUserSearch();
	}, []);

	return (
		<Div>
			<FontAwesomeIcon icon={faSearch} />
			<Input value={searchData.value} onChange={(e) => onUserSearchChange(e)} placeholder="Search users..." />
			{searchData.users[0] && searchData.users[0].name ? (
				<ul>
					{searchData.users.map((user) => {
						return (
							<li onClick={(e) => props.handleUserClick(user)}>
								<h3>{user.name}</h3>
							</li>
						);
					})}
				</ul>
			) : null}
		</Div>
	);
}
export default UserSearch;

UserSearch.propTypes = {};
