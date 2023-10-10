"use client"
import { createContext, ReactNode, useState } from "react";

const initialState = {
    count: 10
}

export const GlobalStateContext = createContext<{ count: number, setCount: any }>({ count: 10, setCount: () => { } });

const MyContext = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0);
    let state = {
        count,
        setCount
    }
    return (
        <GlobalStateContext.Provider value={state}>
            {children}
        </GlobalStateContext.Provider>
    )

}

export default MyContext;