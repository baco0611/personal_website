import React from 'react'
import "./MenuBar.scss"
import Logo from "./img/Logo.png" 
import { Link } from 'react-router-dom'

export default function MenuBar() {
    return (
        <div className='menu-bar'>
            <Link to={"#"}>
                <img id='logo' src={Logo}/>
            </Link>
            <Link to={"#"}>home</Link>
            <Link to={"#about"}>about</Link>
            <Link to={"#about"}>portfolio</Link>
            <Link to={"#contact"}>contact</Link>
        </div>
    )
}
