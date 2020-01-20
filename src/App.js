import React from 'react'
import style from  './App.module.css'
import './App.css'
import imgUrl from './assets/bg.jpg'

function App() {
    console.log(style)
    return (
        <div className={style.app}>
            react A
            {/* <img src={imgUrl} /> */}
        </div>
    )
}

export default App
