
import {fork, call, put, takeEvery} from "redux-saga/effects";
import {catsActions} from "./catSlice";

const apiExecute = async (params) => {
    for (let i = 0; i < 3000_000_000; i++) {}
    const apiResponse = {...params.payload, severData:'severData111'};
  return apiResponse;
}

function* workFetch(params){
    console.log('params.payload1',params.payload)
    // const cats = yield call(()=>fetch("https://api.thecatapi.com/v1/breeds"));
    //=== TIMEOUT 3s 3000_000_000
    // console.log('call catsActions.setcreateInProcess')
    // yield put(catsActions.setcreateInProcess({...params.payload }))
    console.log('params.scope1',params.payload.scope)
    const apiResponse = yield call(()=>apiExecute(params));
    yield put(catsActions.catCreateSuccess(apiResponse))
}

function* watchSaga(){
    console.log("watchSaga catCreate")
    yield takeEvery(catsActions.catCreateStart.type, workFetch)
}

export const catSagaCreate = [
    fork(watchSaga)
]
