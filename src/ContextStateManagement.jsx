import { createContext, useState } from "react";

const ManageContext = createContext();

function ContextProvider(props){
    const [stateCookie, setStateCookie] = useState();

    return <ManageContext.Provider value={{stateCookie, setStateCookie}}>
        {props.children}
    </ManageContext.Provider>
}

export {ManageContext, ContextProvider}