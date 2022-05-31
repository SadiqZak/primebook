import { createContext, useEffect, useReducer } from "react";
import reducerFunc from "./reducer";

const CardContext = createContext();

const CardProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducerFunc,{
        sidebarState:"",
    })

    useEffect(()=>{
        dispatch({type:"InitialState"})
    },[])

    return(
        <CardContext.Provider value={{state, dispatch}}>
            {children}
        </CardContext.Provider>
    )
    
}

export {CardContext, CardProvider};