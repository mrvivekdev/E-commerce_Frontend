import { createContext, useState } from "react";

const ManageContext = createContext();

function ContextProvider(props){
    const [stateCookie, setStateCookie] = useState();
    const [userData, setUserData] = useState();
    console.log(userData);

    return <ManageContext.Provider value={{stateCookie, setStateCookie, userData, setUserData}}>
        {props.children}
    </ManageContext.Provider>
}

export {ManageContext, ContextProvider}