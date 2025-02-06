import {createSlice} from "@reduxjs/toolkit";

const abstractSlice=createSlice({
    name: "catSlice",
    initialState:{
        isLoading:false,
        cats:[]
    },
    reducers:{
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
    getCatsFetch    : abstractSlice.actions.read ,
    getCatsSuccess  : abstractSlice.actions.readSuccess,
    getCatsFailure  : abstractSlice.actions.failure
};

const catsReducer=abstractSlice.reducer
export default catsReducer;
