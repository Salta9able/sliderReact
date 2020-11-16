import React from 'react'
import {data} from './data'

const AppContext = React.createContext(null)
const AppProvider = ({children}) => {
    const [list, setList] = React.useState(data)
    const [imgIndex, setImgIndex] = React.useState(0)

    return <AppContext.Provider value={{list, imgIndex, setImgIndex}}>{children}</AppContext.Provider>
}
const useGlobalContext = () => {
    return React.useContext(AppContext)
}

export {useGlobalContext, AppProvider}

