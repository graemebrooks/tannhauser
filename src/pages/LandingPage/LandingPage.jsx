import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Div = styled.div`
	color: white;
	img {
		width: 500px;
		height: 500px;
	}
`;

const LandingPage = (props) => {
	return (
		<Div>
			<motion.img src="https://i.imgur.com/Cwb6HA5.png" />
		</Div>
	);
};

export default LandingPage;
