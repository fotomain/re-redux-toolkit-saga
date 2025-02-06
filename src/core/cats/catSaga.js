
import {fork, call, put, takeEvery} from "redux-saga/effects";
import {catsActions} from "./catSlice";


function* workFetch(){
    const cats = yield call(()=>fetch("https://api.thecatapi.com/v1/breeds"));
    const catsFormated = yield cats.json()
    const catsChunk = catsFormated.slice(0,10)
    console.log("=== catsChunk",catsChunk)
    // for (let i = 0; i < 1000_000_000; i++) {}
    yield put(catsActions.getCatsSuccess(catsChunk))
}

function* watchSaga(){
    console.log("catSaga1")
    yield takeEvery(catsActions.getCatsFetch.type, workFetch)
}

export const catSaga = [
    fork(watchSaga)
]
