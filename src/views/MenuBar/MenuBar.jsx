import React, { useEffect, useState } from 'react'
import "./MenuBar.scss"
import Logo from "./img/Logo.png" 
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Aos from 'aos';
import "aos/dist/aos.css"

export default function MenuBar() {
    useEffect(() => {
        Aos.init({
          duration: 1200, // Đặt thời gian cho hiệu ứng
        });
    }, []);

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

    useEffect(() => {
        const handleScroll = () => {
            const about = document.querySelector('#about');
            const experience = document.querySelector('#experience');
            const portfolio = document.querySelector('#portfolio');
            const contact = document.querySelector('#contact');

            if (contact.getBoundingClientRect().top <= window.innerHeight/2) {
                setActiveNav('contact');
            } else if (portfolio.getBoundingClientRect().top <= window.innerHeight/2) {
                setActiveNav('portfolio');
            } else if (experience.getBoundingClientRect().top <= window.innerHeight/2) {
                setActiveNav('experience');
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
        <div 
            className='menu-bar' 
            data-aos="fade-right"
            data-aos-once="true"
        >
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
                to={"#experience"}
                onClick={(e) => {
                    e.preventDefault()
                    smoothScroll("experience")
                }}
                className={clsx({ active: activeNav === 'experience'})}
            >experience</Link>
            <Link 
                to={"#portfolio"}
                onClick={(e) => {
                    e.preventDefault()
                    smoothScroll("portfolio")
                }}
                className={clsx({ active: activeNav === 'portfolio'})}
            >portfolio</Link>
            <Link 
                to={"#contact"}
                onClick={(e) => {
                    e.preventDefault()
                    smoothScroll("contact")
                }}
                className={clsx({ active: activeNav === 'contact'})}
            >contact</Link>
        </div>
    )
}
