
import {fork, call, put, takeEvery} from "redux-saga/effects";
import {catsActions} from "./catSlice";


function* workFetch(params){
    console.log('params.payload1',params.payload)
    // const cats = yield call(()=>fetch("https://api.thecatapi.com/v1/breeds"));
    //=== TIMEOUT 3s 3000_000_000
    // console.log('call catsActions.setcreateInProcess')
    // yield put(catsActions.setcreateInProcess({...params.payload }))
    for (let i = 0; i < 1000_000_000; i++) {}
    yield put(catsActions.catCreateSuccess({...params.payload, severData:'severData111'}))
}

function* watchSaga(){
    console.log("watchSaga catCreate")
    yield takeEvery(catsActions.catCreateExecute.type, workFetch)
}

export const catSagaCreate = [
    fork(watchSaga)
]
