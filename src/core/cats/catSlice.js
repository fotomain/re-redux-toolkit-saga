import {createSlice} from "@reduxjs/toolkit";

const abstractSlice=createSlice({
    name: "catSlice",
    initialState:{
        isLoading:false,
        cats:[]
    },
    reducers:{
        create: (state,action) => {
            state.isCreating=true;
            console.log("=== isCreating1");
        },
        catCreateSuccess: (state,action) => {
            state.isCreating=false;
            console.log("=== catCreateSuccess1 action ",action);
            state.cats = [...state.cats,{id:action.payload.id, name:action.payload.name+ ' #' + action.payload.id }]
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

    catCreate       : abstractSlice.actions.create ,
    catCreateSuccess: abstractSlice.actions.catCreateSuccess,

    getCatsFetch    : abstractSlice.actions.read ,
    getCatsSuccess  : abstractSlice.actions.readSuccess,
    getCatsFailure  : abstractSlice.actions.failure
};

const catsReducer=abstractSlice.reducer
export default catsReducer;
