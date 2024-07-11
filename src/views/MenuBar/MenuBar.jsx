import React, { useEffect, useState } from 'react'
import "./MenuBar.scss"
import Logo from "./img/Logo.png" 
import { Link } from 'react-router-dom'
import clsx from 'clsx'

export default function MenuBar() {
    
    const smoothScroll = (targetId) => {
        if(targetId != "#") {
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        } else 
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
    }

    const [activeNav, setActiveNav] = useState('#');
    console.log(activeNav)

    useEffect(() => {
        const handleScroll = () => {
            const about = document.querySelector('#about');
            const skill = document.querySelector('#skill');
            console.log(about.getBoundingClientRect().top)

            if (skill.getBoundingClientRect().top <= window.innerHeight/2) {
                setActiveNav('skill');
            } else if (about.getBoundingClientRect().top <= window.innerHeight/2) {
                setActiveNav('about');
            } else {
                setActiveNav('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='menu-bar'>
            <Link 
                to={"#"}
                onClick={(e) => {
                    e.preventDefault()
                    smoothScroll("#")
                }}
            >
                <img id='logo' src={Logo}/>
            </Link>
            <Link 
                to={"#about"}
                onClick={(e) => {
                    e.preventDefault()
                    smoothScroll("about")
                }}
                className={clsx({"active": activeNav === "about"})}
            >about</Link>
            <Link 
                to={"#skill"}
                onClick={(e) => {
                    e.preventDefault()
                    smoothScroll("skill")
                }}
                className={clsx({ active: activeNav === 'skill'})}
            >skill</Link>
            <Link to={"#portfolio"}>portfolio</Link>
            <Link to={"#contact"}>contact</Link>
        </div>
    )
}
