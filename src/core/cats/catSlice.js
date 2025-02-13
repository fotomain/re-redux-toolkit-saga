import {createSlice} from "@reduxjs/toolkit";

const abstractSlice=createSlice({
    name: "catSlice",
    initialState:{
        isLoading:false,
        createInProcess:false,
        createStarted:false,
        cats:[]
    },
    reducers:{
        createStart: (state,action) => {
            state.createStarted=true;
            console.log("=== isCreating1");
        },
        catCreateExecute: (state,action) => {
            state.createInProcess=true;
            console.log("=== setcreateInProcess1 true ");
        },
        createSuccess: (state,action) => {
            state.cats = [...state.cats,{id:action.payload.id, name:action.payload.name+ ' #' + action.payload.id }]
            state.createStarted=false;
            state.createInProcess=false;
            console.log("=== catCreateSuccess1 action ",action);
        },
        read: (state) => {
            state.isLoading=true;
        },
        readSuccess: (state,action) => {
            state.cats = action.payload;
            state.isLoading=false;
        },
        failure: (state,action) => {
            state.isLoading=false;
        }
    }
})

export const catsActions = {

    catCreateStart      : abstractSlice.actions.createStart ,
    catCreateExecute    : abstractSlice.actions.catCreateExecute,
    catCreateSuccess    : abstractSlice.actions.createSuccess,

    getCatsFetch    : abstractSlice.actions.read ,
    getCatsSuccess  : abstractSlice.actions.readSuccess,
    getCatsFailure  : abstractSlice.actions.failure
};

const catsReducer=abstractSlice.reducer
export default catsReducer;
