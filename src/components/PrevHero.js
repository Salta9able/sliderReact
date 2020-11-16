import React from 'react'
import Hero from './Hero'
import {useGlobalContext} from '../context'

const PrevHero = () => {

    return (
        <div className="prevHero">
            <div className="prevHero_wrapper">
            <Hero checkIndex="small"/>
            </div>
            
        </div>
    )
}

export default PrevHero
