
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {useEffect} from "react";
import {catsActions} from "./catSlice";
import {Button, dividerClasses} from "@mui/material";

const CatsList = () => {

    const catsState = useSelector((state) => state.catsState);
    const isLoading = useSelector((state) => state.catsState.isLoading);
    const createStarted = useSelector((state) => state.catsState.createStarted);
    const createInProcess = useSelector((state) => state.catsState.createInProcess);
    const dispatch = useDispatch();

    console.log('createStarted1',createStarted)
    console.log('createInProcess list ',createInProcess)

    useEffect(() => {
        console.log("dispatch1")
        dispatch(catsActions.getCatsFetch({scope:'all'}))
    }, [dispatch]);

    useEffect(() => {
        console.log("createStarted111")
    }, [createStarted]);

    // useEffect(() => {
    //     console.log('useEffect createStarted')
    //     if(createStarted) {
    //         setTimeout(()=>{
    //                 dispatch(catsActions.catCreateExecute({
    //                     id: Date.now(),
    //                     name: 'Mixus'
    //                 }))
    //             },
    //             10)
    //     }
    //
    //     return () => {
    //     };
    // }, [createStarted]);

    return(
        <div style={{display:'flex', flexDirection:'column'}}>
            <div>CatsList</div>
            <div>{(isLoading)?'Loading...':'Data OK'}</div>
            <div>{(createStarted)?'createStarted...':'--'}</div>
            <div>{(createInProcess)?'createInProcess...':'--'}</div>

            {(createStarted)?'Create...':
            <div>
                <Button
                    variant="contained"
                    align="left"
                    onClick={() => {
                        dispatch(catsActions.catCreateStart({
                            id: Date.now(),
                            name: 'Mixus'
                        }))
                        // dispatch(catsActions.catCreateExecute({
                        //     id: Date.now(),
                        //     name: 'Mixus'
                        // }))
                    }}
                >
                    CREATE CAT
                </Button>
            </div>
            }

            {(0!==catsState?.cats.length) && catsState.cats.map((el,ii)=>{
                return <React.Fragment key={ii}>
                    <div >{el.id} ---  {el.name}</div>
                </React.Fragment>
            })}

            {/*<div>{JSON.stringify(catsState)}</div>*/}

        </div>
    )
}

export default CatsList
