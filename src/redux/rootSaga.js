import { all } from 'redux-saga/effects';
import { movieSaga } from './movieSaga';
import {catSaga} from "../core/cats/catSaga";


export default function* rootSaga() {
	yield all([...movieSaga,...catSaga]);
}
