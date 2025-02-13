
import {delay, fork, call, put, takeEvery} from "redux-saga/effects";

import {catsActions} from "./catSlice";


const slow_function = async (params) => {

    const apiResponse0 = await fetch("fake fetch api");
    let c=0;
    console.log('=== delay2 start')
    console.log('=== delay2 input not working')
    for (let i = 0; i < 10000_000_000; i++) {c++}
    console.log('=== delay2 finish')
    console.log('=== c',c)

};
const apiExecute = async (params) => {
    // === !!! await always needed
    // const apiResponse0 = await fetch("fake fetch api");

    const res = await slow_function(params)

    const apiResponse = {...params.payload, severData:'severData111'};
  return apiResponse;
}

function* workFetch(params){
    // console.log('params.payload1',params.payload)

    yield put(catsActions.catCreateStart(params))

    console.log('=== delay1 start')
    console.log('=== delay1 input working OK')
    yield delay(4000)
    console.log('=== delay1 finish')

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
