import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import UserSubNav from '../../components/UserSubNav/UserSubNav';

const Div = styled.div``;

const ComparePage = (props) => {
	return (
		<Div>
			<UserSubNav />
			<h2>Compare!</h2>
		</Div>
	);
};

export default ComparePage;
