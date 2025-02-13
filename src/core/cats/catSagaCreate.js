
import {fork, call, put, takeEvery} from "redux-saga/effects";
import {catsActions} from "./catSlice";

const slow_function = async (params) => {

    // const Promise1 = new Promise((resolve)=>resolve(1))
    // await Promise1()
    const apiResponse0 = await fetch("https://api.thecatapi.com/v1/breeds")
    let c=0;
    for (let i = 0; i < 1000_000_000; i++) {c++}
    console.log('=== c',c)

};
const apiExecute = async (params) => {
    // === !!! await always needed

    const res = await slow_function(params)

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

    yield put(catsActions.catCreateStart(params))

    const apiResponse = yield call(()=>apiExecute(params));

    yield put(catsActions.catCreateSuccess(apiResponse))
}

function* watchSaga(){
    console.log("watchSaga catCreate")
    yield takeEvery(catsActions.catCreateExecute.type, workFetch)
}

export const catSagaCreate = [
    fork(watchSaga)
]
