
import {fork, call, put, takeEvery} from "redux-saga/effects";
import {catsActions} from "./catSlice";


function* workFetch(params){
    console.log('params.payload1',params.payload)
    // const cats = yield call(()=>fetch("https://api.thecatapi.com/v1/breeds"));

    yield put(catsActions.catCreateSuccess({...params.payload, severData:'severData111'}))
}

function* watchSaga(){
    console.log("watchSaga catCreate")
    yield takeEvery(catsActions.catCreate.type, workFetch)
}

export const catSagaCreate = [
    fork(watchSaga)
]
