import { createContext, useState } from "react";


export const MyContext = createContext();


export const MyProvider =({children})=>{

const [counter,setCounter] = useState(0);
    return(

        <MyContext.Provider value={{counter,setCounter}} >
            {children} 
        </MyContext.Provider>
    )

}