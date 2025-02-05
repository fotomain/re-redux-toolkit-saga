import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	movieList: [],
	movie: {},
};

const movieSlice = createSlice({
	name: 'movie',
	initialState: INITIAL_STATE,
	reducers: {
		getMovies(name) {
			console.log("getMovies",name)
			return name;
		},
		setMovies: (state, action) => {
			console.log("action.payload",action.payload)
			state.movieList = action.payload;
		},
		///Get a single movie
		getMovie(id) {
			console.log("=== getMovie ",id)
			return id;
		},
		setMovie: (state, action) => {
			state.movie = action.payload;
		},
	},
});

export const { getMovies, setMovies, getMovie, setMovie } = movieSlice.actions;

export default movieSlice.reducer;
