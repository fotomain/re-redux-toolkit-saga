import { all } from 'redux-saga/effects';
import { movieSaga } from './movieSaga';
import {catSagaRead} from "../core/cats/catSagaRead";
import {catSagaCreate} from "../core/cats/catSagaCreate";


export default function* rootSaga() {
	yield all([...movieSaga,...catSagaRead,...catSagaCreate]);
}
