import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`color: white;`;

const LandingPage = (props) => {
	return (
		<div>
			<H1>LandingPage</H1>;
			<button onClick={() => props.testExpressConnection()} className="btn btn-default">
				Test Express Connection!
			</button>
		</div>
	);
};

export default LandingPage;
