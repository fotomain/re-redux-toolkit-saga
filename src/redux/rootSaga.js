import { all } from 'redux-saga/effects';
import { movieSaga } from './movieSaga';
import {catSagaRead} from "../core/cats/catSagaRead";


export default function* rootSaga() {
	yield all([...movieSaga,...catSagaRead]);
}
