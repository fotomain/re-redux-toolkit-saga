import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { getMovies, setMovies, getMovie, setMovie } from './feature/movieSlice';

import { fetchAllMovies, fetchOneMovie } from './api';

function* onLoadMoviesAsync({ payload }) {
	try {
		const movieName = payload;
		const response = yield call(fetchAllMovies, movieName);
		console.log("response1",response)

		if (response.status === 200) {
			console.log("response1-200",response)
			yield put(setMovies(response.data)); ///DISPATCH aCTION
		} else {
		}
	} catch (error) {
		console.log(error);
	}
}

function* onLoadMovieAsync({ payload }) {
	try {
		const movieId = payload;
		const response = yield call(fetchOneMovie, movieId);

		if (response.status === 200) {
			yield put(setMovie({ ...response.data })); ///DISPATCH aCTION
		} else {
		}
	} catch (error) {
		console.log(error);
	}
}

function* onLoadMovies() {
	//// generator function
	yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onLoadMovie() {
	//// generator function
	yield takeLatest(getMovie.type, onLoadMovieAsync);
}

export const movieSaga = [fork(onLoadMovies), fork(onLoadMovie)];
