import React, { useRef } from 'react'
import './style.css'

function Start() {
    // const [y, changeY] = useState(0)
    const [ref1, ref2, ref3, ref4, ref5, ref6] = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ]

    let realitY = 0
    let visualY = 0
    const rem =
        window
            .getComputedStyle(document.documentElement)
            .fontSize.replace('px', '') * 1
    const vh = window.innerHeight / 100
    const vw = window.innerWidth / 100
    const step = 1.5 * rem
    const h1 = 12 * rem
    const h2 = h1 + 50 * vh

    const handleScroll = ev => {
        const { deltaY } = ev

        if (realitY + deltaY <= 0) {
            realitY = 0
        } else {
            realitY = realitY + deltaY
        }

        visualY = realitY

        //吸附效果
        if (Math.abs(visualY - h1) <= step) {
            visualY = h1
        } else if (Math.abs(visualY - h2) <= step) {
            visualY = h2
        }

        ref1.current.style.bottom = 50 * vh + visualY + 'px'
        ref1.current.style.opacity = 1 - Math.min(visualY, h1) / h1

        ref2.current.style.top = 50 * vh - visualY + 'px'
        ref2.current.style.opacity = Math.min(visualY, h1) / h1

        ref3.current.style.top = 100 * vh + 24 * rem - visualY * 2 + 'px'

        if (visualY <= h1) {
            ref5.current.style.top = 50 * vh - visualY + 8 * rem + 'px'
            ref5.current.style.opacity = Math.min(visualY, h1) / h1
            ref6.current.style.top = 50 * vh - visualY + 8 * rem + 'px'
            ref6.current.style.opacity = Math.min(visualY, h1) / h1
        }
        if (visualY >= h1 && visualY <= h2) {
            const ratio = (h2 - visualY) / (h2 - h1)

            ref5.current.style.top =
                20 * vh + (30 * vh - 4 * rem) * ratio + 'px'
            ref5.current.style.right = 20 * vw + 8 * rem * ratio + 'px'

            ref6.current.style.top =
                20 * vh + 3 * rem + (30 * vh - 7 * rem) * ratio + 'px'
            ref6.current.style.right = 20 * vw + 6 * rem * ratio + 'px'
            ref5.current.style.color = ''
            ref6.current.style.color = ''
        }
        if (visualY === h2) {
            ref5.current.style.color = '#fffef9'
            ref6.current.style.color = '#fffef9'
        }
    }

    const createBig = (str, cla = '') =>
        str.split('').map(s => (
            <span key={Math.random()} className={`big ${cla}`}>
                {s}
            </span>
        ))
    const createMid = (str, cla = '') =>
        str.split('').map(s => (
            <span key={Math.random()} className={`mid ${cla}`}>
                {s}
            </span>
        ))
    const createLit = (str, cla = '') =>
        str.split('').map(s => (
            <span key={Math.random()} className={`lit ${cla}`}>
                {s}
            </span>
        ))
    return (
        <div className="start-container" onWheel={handleScroll}>
            <div className="unit p1" ref={ref1}>
                <div className="row">{createBig('你好')}</div>
                <div className="row">{createBig('我是一日渚')}</div>
            </div>
            <div className="unit p2" ref={ref2}>
                <div className="row">{createMid('我们在风中游泳')}</div>
                <div className="row">{createMid('寂静成型')}</div>
                <div className="row">
                    {createMid('我们看不见')}
                    {createMid('最初', 'hide')}
                    {createMid('的日子')}
                </div>
            </div>
            <div className="unit p3" ref={ref3}></div>

            <div className="unit p4 col" ref={ref4}>
                {createMid('最初', 'hide')}
                {createMid('，只有爱情')}
            </div>

            <div className="unit p5 mid" ref={ref5}>
                最
            </div>
            <div className="unit p6 mid" ref={ref6}>
                初
            </div>
            <div className="unit p7">
                <div className="row">{createMid('草在结它的种子')}</div>
                <div className="row">{createMid('风在摇它的叶子')}</div>
                <div className="row">{createMid('我们站着')}</div>
                <div className="row">{createMid('不说话')}</div>
                <div className="row">{createMid('就十分美好')}</div>
            </div>
        </div>
    )
}

export default Start
