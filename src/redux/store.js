
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import movieReducer from './feature/movieSlice';

import rootSaga from './rootSaga';
import catsReducer from "../core/cats/catSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		movie: movieReducer,
		catsState: catsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
