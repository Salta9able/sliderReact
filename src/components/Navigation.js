import React from 'react'
import {useGlobalContext} from '../context'
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const Navigation = () => {
    const {setImgIndex} = useGlobalContext()
    return (
        <div className="nav">
            <button className="nav_prev" onClick={() => setImgIndex(prev => prev -1)}><RiArrowLeftSFill/></button>
            <button className="nav_next" onClick={() => setImgIndex(prev => prev +1)}><RiArrowRightSFill /></button>
        </div>
    )
}

export default Navigation
