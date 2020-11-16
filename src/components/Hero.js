import React from 'react'
import {useGlobalContext} from '../context'

const Hero = ({checkIndex}) => {
    const {list, imgIndex, setImgIndex} = useGlobalContext()
    
    

    React.useEffect(() => {
        if (imgIndex > list.length - 1) {
            setImgIndex(0)
        }
        if (imgIndex < 0) {
            setImgIndex(list.length - 1)
        }
    }, [list, imgIndex])

    return (
        <div className="hero">
            {
                list.map((item,idx) => {
                    let position='next'
                    if (idx === imgIndex) {
                        position = 'current'
                    }
                    if (idx === imgIndex - 1 ||
                        (imgIndex === 0 && idx === list.length - 1)) {
                        position = 'prev'
                    }
                    return <div key={item.id} className={`hero_elem ${position}`} style={{backgroundImage:`url(${item.url})`}}>
                        
                    </div>
                })
            }
        </div>
    )
}

export default Hero
