import React, { useRef } from 'react'
import './style.css'

function Start() {
    // const [y, changeY] = useState(0)
    const [ref1, ref2] = [useRef(null), useRef(null)]

    let y = 0
    const rem =
        window
            .getComputedStyle(document.documentElement)
            .fontSize.replace('px', '') * 1
    const vh = window.innerHeight/100
    const h1 = 12 * rem

    const handleScroll = ev => {
        const { deltaY } = ev

        if (y + deltaY <= 0) {
            y = 0
        } else {
            y = y + deltaY
        }

        console.log(vh);
        ref1.current.style.bottom = 50 * vh + y + 'px'
        ref1.current.style.opacity = 1 - Math.min(y, h1) / h1
        ref2.current.style.top = 50 * vh - y + 'px'
        ref2.current.style.opacity = Math.min(y, h1) / h1
    }

    return (
        <div className="start-container" onWheel={handleScroll}>
            <div className="title-container p1" ref={ref1}>
                <div className="title one">你好</div>
                <div className="title two">我是一日渚</div>
            </div>
            <div className="title-container p2" ref={ref2}>
                <div className="subtitle">梦一日，雨一日，百年人非事如是</div>
                <div className="title">四百八十寺</div>
            </div>
            <div className='title-container p3'>

            </div>
        </div>
    )
}

export default Start
