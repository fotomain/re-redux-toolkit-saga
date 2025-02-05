import React, { useEffect } from 'react';
import {
	Card,
	CardMedia,
	Grid,
	CardContent,
	Typography,
	Button,
} from '@mui/material';
import { Link, useParams, useNavigate } from 'react-router-dom';

import useStyles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/feature/movieSlice';

const Movie = () => {
	const { id } = useParams();
	const classes = useStyles();
	const { movie } = useSelector((state) => ({ ...state.movie }));
	const dispatch = useDispatch();
	const navigate = useNavigate();



	useEffect(() => {
		if (id) {
			console.log("=== id1 ",id)
			dispatch(getMovie(id));
		}
	}, [id]);

	useEffect(() => {
		console.log("movie1",movie)
	}, [movie]);


	return (
		<div>
			<section className={classes.section}>
				<img src={movie.Poster} alt={movie.Title} />
				<div>
					<Typography
						align="left"
						variant="h3"
						gutterBottom
						component="h2"
					>
						{movie.Title}
					</Typography>
					<Typography
						align="left"
						variant="h5"
						gutterBottom
						component="h5"
					>
						Year :{movie.Year}
					</Typography>
					<Typography
						align="left"
						variant="body1"
						gutterBottom
						component="p"
					>
						{movie.Plot}
					</Typography>

					<Typography
						align="left"
						variant="h6"
						gutterBottom
						component="h6"
					>
						Director :{movie.Director}
					</Typography>

					<Typography
						align="left"
						variant="h7"
						gutterBottom
						component="h6"
					>
						Released Date :{movie.Released}
					</Typography>
					<Button
						variant="contained"
						align="left"
						onClick={() => navigate('/')}
					>
						Go Back
					</Button>
				</div>
			</section>
		</div>
	);
};

export default Movie;
