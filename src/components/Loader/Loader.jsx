import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 90vh;

	@keyframes spin {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(359deg);
		}
	}
	.spinner-box {
		width: 300px;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
	}

	.solar-system {
		width: 250px;
		height: 250px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.orbit {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #ffffffa5;
		border-radius: 50%;
	}

	.earth-orbit {
		width: 165px;
		height: 165px;
		-webkit-animation: spin 12s linear 0s infinite;
	}

	.venus-orbit {
		width: 120px;
		height: 120px;
		-webkit-animation: spin 7.4s linear 0s infinite;
	}

	.mercury-orbit {
		width: 90px;
		height: 90px;
		-webkit-animation: spin 3s linear 0s infinite;
	}

	.planet {
		position: absolute;
		top: -5px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: ${(props) => props.theme.primaryGreen};
	}

	.sun {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background-color: ${(props) => props.theme.pulsarPurple};
	}
`;

const Loader = () => {
	return (
		<Div className="spinner-box">
			<div className="solar-system">
				<div className="earth-orbit orbit">
					<div className="planet earth" />
					<div className="venus-orbit orbit">
						<div className="planet venus" />
						<div className="mercury-orbit orbit">
							<div className="planet mercury" />
							<div className="sun" />
						</div>
					</div>
				</div>
			</div>
		</Div>
	);
};

export default Loader;
