import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Div = styled.nav`
	display: flex;
	flex-direction: column;
	/* justify-content: center; */

	button {
		margin: 10px;
	}

	.btn-update {
		background: transparent;
		border: solid 1px white;
		color: white;
		&:hover {
			background: ${(props) => props.theme.pulsarPurple};
		}
	}

	.btn-delete {
		background: transparent;
		border: solid 1px white;
		color: white;
		&:hover {
			background: ${(props) => props.theme.royRed};
		}
	}
`;

const MovieButtonContainer = (props) => {
	return (
		<Div>
			<Link
				to="/movieDetail"
				onClick={(movie) => props.handleMovieDetailClick(props.movie)}
				movie={props.movie}
				style={{ textDecoration: 'none' }}
			>
				<motion.button className="btn btn-update" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
					<FontAwesomeIcon icon={faPencilAlt} />
				</motion.button>
			</Link>
			<motion.button
				onClick={() => props.deleteMovie(props.movie._id)}
				className="btn btn-delete"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				<FontAwesomeIcon icon={faTrashAlt} />
			</motion.button>
		</Div>
	);
};

export default MovieButtonContainer;
