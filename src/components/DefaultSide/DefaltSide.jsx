import React from 'react'
import "./DefaultSide.scss"
import Home from '../../views/Home/Home'
import About from '../../views/About/About'
import Skill from '../../views/Skill/Skill'
import Experience from '../../views/Experience/Experience'
import Portfolio from '../../views/Portfolio/Portfolio'
import Contact from '../../views/Contact/Contact'

export default function DefaltSide() {
    return (
    <div className='default-side'>
        <Home/>
        <About/>
        <Skill/>
        <Experience/>
        <Portfolio/>
        <Contact/>
    </div>
    )
}
