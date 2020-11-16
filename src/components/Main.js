import React from 'react'
import gsap from 'gsap'
import Hero from './Hero'
import {useGlobalContext} from '../context'

const Main = () => {
    const {list,imgIndex, setImgIndex} = useGlobalContext()
    const textArr0 = list.map(item => item.text[0])
    const textArr1 = list.map(item => item.text[1])
    const textRef = React.useRef()

    React.useEffect(() => {
        if (imgIndex > list.length - 1) {
            setImgIndex(0)
        }
        if (imgIndex < 0) {
            setImgIndex(list.length - 1)
        }
       
    }, [ imgIndex])

    React.useEffect(() => {
        gsap.fromTo(textRef.current, {y: 50, opacity: 0}, {duration: 0.5, y: 0, opacity: 1})

    }, [imgIndex])

    return (
        <div className="hero_wrapper">
            <Hero checkIndex="main"/>
            <div className="text" ref={textRef} >
                <h2 > {textArr0[imgIndex]}</h2>
                <p>{textArr1[imgIndex]}</p>
               
            </div>
      </div>
    )
}

export default Main
