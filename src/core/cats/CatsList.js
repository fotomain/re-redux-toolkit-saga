
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {useEffect} from "react";
import {catsActions} from "./catSlice";
import {Button, dividerClasses} from "@mui/material";

const CatsList = () => {

    const catsState = useSelector((state) => state.catsState);
    const isLoading = useSelector((state) => state.catsState.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("dispatch1")
        dispatch(catsActions.getCatsFetch({scope:'all'}))
    }, [dispatch]);

    return(
        <div style={{display:'flex', flexDirection:'column'}}>
            <div>CatsList</div>
            <div>{(isLoading)?'Loading...':'Data OK'}</div>

            <div>
                <Button
                    variant="contained"
                    align="left"
                    onClick={() => {
                        dispatch(catsActions.catCreate({
                            id:Date.now(),
                            name:'Mixus'
                        }))
                    }}
                >
                    CREATE CAT
                </Button>
            </div>

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
