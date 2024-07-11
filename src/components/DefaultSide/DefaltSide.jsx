import React from 'react'
import "./DefaultSide.scss"
import Home from '../../views/Home/Home'
import About from '../../views/About/About'
import Skill from '../../views/Skill/Skill'

export default function DefaltSide() {
    return (
    <div className='default-side'>
        <Home/>
        <About/>
        <Skill/>
    </div>
    )
}
