import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import useStyles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../redux/feature/movieSlice';

const Search = () => {
	const [name, setName] = useState('Title111');
	const classes = useStyles();
	const dispatch = useDispatch();

	const {
		movieList: { Error: error, Search: movieData },
	} = useSelector((state) => ({ ...state.movie }));

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	useEffect(() => {
		dispatch(getMovies(name));
	}, [name]);

	return (
		<div>
			<h2 className={classes.title}>Movie Search App</h2>
			<form className={classes.form} onSubmit={handleSubmit}>
				<TextField
					type="text"
					fullWidth
					value={name}
					sx={{ m: 1, width: '55ch' }}
					onChange={(e) => setName(e.target.value)}
				/>
				{error && <p className={classes.error}>{error}</p>}
			</form>
		</div>
	);
};

export default Search;
