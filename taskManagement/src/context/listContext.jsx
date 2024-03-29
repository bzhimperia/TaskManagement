import {createContext, useContext} from "react";
import useShopReducer from "../reducer/useListReducer.jsx";

const listContext = createContext()


export const useListContext = () => {
    return useContext(listContext)
}

const ListContextProvider = ({children}) => {

    const context = useShopReducer()

    return (
        <listContext.Provider value={context}>
            {children}
        </listContext.Provider>
    )
}

export default ListContextProvider