import React, { useRef } from 'react'
import './style.css'

function Start() {
    // const [y, changeY] = useState(0)

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const ref7 = useRef(null)
    const ref8 = useRef(null)
    const ref9 = useRef(null)
    const ref10 = useRef(null)
    const ref11 = useRef(null)
    const ref12 = useRef(null)
    const ref13 = useRef(null)
    const ref14 = useRef(null)
    const ref15 = useRef(null)

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
    const h3 = h2 + 50 * vh
    const h4 = h3 + (40 * vw - 10 * rem) * 2
    const h5 = h4 + 100 * vh
    const h6 = h5 + 50 * vh
    const h7 = h6 + 50 * vh

    const handleScroll = ev => {
        const { deltaY } = ev

        if (realitY + deltaY <= 0) {
            realitY = 0
        } else if (realitY + deltaY >= h7) {
            realitY = h7
        } else {
            realitY = realitY + deltaY
        }

        visualY = realitY

        //吸附效果
        if (Math.abs(visualY - h1) <= step) {
            visualY = h1
        } else if (Math.abs(visualY - h2) <= step) {
            visualY = h2
        } else if (Math.abs(visualY - h3) <= step) {
            visualY = h3
        } else if (Math.abs(visualY - h4) <= step) {
            // visualY = h4
        } else if (Math.abs(visualY - h5) <= step) {
            visualY = h5
        } else if (Math.abs(visualY - h6) <= step) {
            visualY = h6
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

            ref5.current.style.color = `rgb(${256 - 169 * ratio}, ${255 -
                167 * ratio},${249 - 157 * ratio})`
            ref6.current.style.color = `rgb(${256 - 169 * ratio}, ${255 -
                167 * ratio},${249 - 157 * ratio})`
        }
        if (visualY > h1) {
            const ratio = (visualY - h2 - 22 * vh) / (3 * vh)
            ref4.current.style.opacity = 1 - ratio
            ref5.current.style.opacity = 1 - ratio
            ref6.current.style.opacity = 1 - ratio
        }

        ref7.current.style.top = 150 * vh - visualY + 'px'

        if (visualY <= h3) {
            ref8.current.style.top = 200 * vh + 2 * rem - visualY + 'px'
        }
        ref9.current.style.opacity = 0
        if (visualY >= h3 && visualY <= h4) {
            const ratio = (visualY - h3) / (h4 - h3)
            ref8.current.style.top =
                200 * vh + 2 * rem - h3 - (visualY - h3) / 2 + 'px'
            ref8.current.style.width = 100 * vw - 60 * vw * ratio + 'px'
            ref8.current.style.height = 100 * vw - 60 * vw * ratio + 'px'
            ref8.current.style.left = 30 * vw * ratio + 'px'
            ref8.current.style.borderRadius =
                (100 * vw - 60 * vw * ratio) / 2 + 'px'

            ref9.current.style.opacity = ratio
            ref10.current.style.opacity = 0
            ref9.current.style.top = 14 * rem - ratio * 8 * rem + 'px'
        }
        if (visualY >= h4 && visualY <= h5) {
            const inv = visualY - h4
            const exp = 1.3
            ref8.current.style.top = 100 * vh - 40 * vw - inv / 2 + 'px'
            ref8.current.style.width =
                Math.abs(40 * vw - Math.pow(inv, exp)) + 'px'
            ref8.current.style.height =
                Math.abs(40 * vw - Math.pow(inv, exp)) + 'px'
            ref8.current.style.left =
                50 * vw - Math.abs(40 * vw - Math.pow(inv, exp)) / 2 + 'px'
            ref8.current.style.borderRadius =
                Math.abs(40 * vw - Math.pow(inv, exp)) / 2 + 'px'
        }

        if (visualY >= h4) {
            const ratio = (visualY - h4) / (20 * vh)
            ref9.current.style.opacity = 1 - ratio
            ref9.current.style.top = 6 * rem - 1.2 * ratio * 8 * rem + 'px'
            ref10.current.style.opacity = ratio
            ref10.current.style.top = 14 * rem - 1.2 * ratio * 8 * rem + 'px'

            ref11.current.style.top =
                100 * vh -
                ((50 * vh + 12 * rem) * (visualY - h4)) / (h5 - h4) +
                'px'
            ref11.current.style.opacity =
                (visualY - h4 - 80 * vh) / (h5 - h4 - 80 * vh)

            ref12.current.style.top =
                100 * vh +
                12 * rem -
                ((50 * vh + 12 * rem) * (visualY - h4)) / (h5 - h4) +
                'px'
            ref12.current.style.opacity = 0

            ref13.current.style.top =
                100 * vh +
                20 * rem -
                ((50 * vh + 12 * rem) * (visualY - h4)) / (h5 - h4) +
                'px'
            ref13.current.style.opacity = 0
            ref14.current.style.top = 100 * vh + 'px'
        }
        if (visualY >= h5) {
            const ratio = (visualY - h5) / (h6 - h5)
            ref11.current.style.opacity = 1 - (visualY - h5) / (20 * vh)
            ref12.current.style.opacity = ratio
            ref12.current.style.top = 50 * vh - 8 * rem * ratio + 'px'
            ref13.current.style.opacity = ratio
            ref13.current.style.top = 50 * vh + 8 * rem - 8 * rem * ratio + 'px'

            ref14.current.style.top = 100 * vh - ratio * 50 * vh + 'px'
        }
        ref13.current.style.color = ''
        if (visualY >= h6) {
            const ratio = (visualY - h6) / (h7 - h6)
            ref15.current.style.opacity = 1 - ratio
            ref13.current.style.color = `rgb(${107 - 30 * ratio}, ${122 -
                34 * ratio},${140 - 48 * ratio})`
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
            <div className="unit p7" ref={ref7}>
                <div className="row">{createMid('草在结它的种子')}</div>
                <div className="row">{createMid('风在摇它的叶子')}</div>
                <div className="row">{createMid('我们站着')}</div>
                <div className="row">{createMid('不说话')}</div>
                <div className="row">{createMid('就十分美好')}</div>
            </div>
            <div className="unit p8" ref={ref8}></div>
            <div className="unit p9" ref={ref9}>
                <div className="row">{createMid('你一会儿看我')}</div>
                <div className="row">{createMid('一会儿看云')}</div>
            </div>
            <div className="unit p10" ref={ref10}>
                <div className="row">{createMid('我觉得你看我时很远')}</div>
                <div className="row">{createMid('看云很近')}</div>
            </div>
            <div className="unit p11" ref={ref11}>
                <div className="row">{createMid('你说你孤独')}</div>
                <div className="row">{createMid('就像很久以前')}</div>
                <div className="row">{createMid('长星照耀十三座州府')}</div>
            </div>
            <div className="unit p12" ref={ref12}>
                <div className="row">{createMid('我在夜里哭着')}</div>
                <div className="row">{createMid('像木头一样哭着')}</div>
            </div>
            <div className="unit p13" ref={ref13}>
                <div className="row" ref={ref15}>
                    {createMid('我什么也没有失去')}
                </div>
                <div className="row">{createMid('我走出了时间')}</div>
            </div>
            <div className="unit p14" ref={ref14}></div>
        </div>
    )
}

export default Start
