import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {catsActions} from "./catSlice";
import {dividerClasses} from "@mui/material";

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
            <div>{(isLoading)?'Loading...':'isLoading = false'}</div>
            {(0!==catsState?.cats.length) && catsState.cats.map((el,ii)=>{
                return <div key={ii}>{el.name}</div>
            })}
            {/*<div>{JSON.stringify(catsState)}</div>*/}
        </div>
    )
}

export default CatsList
