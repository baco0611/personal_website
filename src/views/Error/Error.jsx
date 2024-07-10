import React from 'react'
import "./Error.scss"
import Logo from "../../assets/image/Logo.png"
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='error'>
            <img src={Logo}></img>
            <p>This link seems to not exist. 
            
            <br/>Please click <Link to={"/"}>here</Link> to return to the homepage.</p>
        </div>
    )
}
