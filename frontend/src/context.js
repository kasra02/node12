import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [isSideBarOpen,setIsSideBarOpen] = useState(false)
    const [isContentOpen,setIsContentOpen] = useState(true)

    const openSidebar = () => {
        setIsSideBarOpen(true)
        setIsContentOpen(false)
    }
    const closeSidebar = () => {
        setIsSideBarOpen(false)
        setIsContentOpen(true)
    }


    return<AppContext.Provider value={{openSidebar,closeSidebar,isSideBarOpen,isContentOpen}}>
        {children}
    </AppContext.Provider>}

//customer hook
const useGlobalContext = () => {
    return useContext(AppContext)
}


export default useGlobalContext
