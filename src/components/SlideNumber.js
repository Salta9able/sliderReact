import React from 'react'
import {useGlobalContext} from '../context'

const SlideNumber = () => {
    const {list,imgIndex} = useGlobalContext()
    
    return (
        <div className="slideNumber">
            <div className="number">01</div>
            {
                list.map((item,i) => {
                    return <div key={item.id} className={i===imgIndex ? 'dash current' : 'dash'}></div>
                })
            }
            <div className="number">03</div>
        </div>
    )
}

export default SlideNumber
