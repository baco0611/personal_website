import React from 'react'
import "./Footer.scss"
import Logo from "./img/Logo.png"
import { Link } from 'react-router-dom';

export default function Footer() {
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

    return (
        <div className='footer'>
            <div className='content'>
                <div className='main'>
                    <Link 
                        to={"#"}
                        onClick={(e) => {
                            e.preventDefault()
                            smoothScroll("#")
                        }}
                    >
                        <img id='logo' src={Logo}/>
                    </Link>
                    <h1>Bao Huynh Van Nguyen</h1>

                    <div className='navigate'>
                        <Link 
                            to={"#about"}
                            onClick={(e) => {
                                e.preventDefault()
                                smoothScroll("about")
                            }}
                        >about</Link>
                        <Link 
                            to={"#experience"}
                            onClick={(e) => {
                                e.preventDefault()
                                smoothScroll("experience")
                            }}
                        >experience</Link>
                        <Link 
                            to={"#portfolio"}
                            onClick={(e) => {
                                e.preventDefault()
                                smoothScroll("portfolio")
                            }}
                        >portfolio</Link>
                        <Link 
                            to={"#contact"}
                            onClick={(e) => {
                                e.preventDefault()
                                smoothScroll("contact")
                            }}
                        >contact</Link>
                    </div>
                </div>
                <div className='credit'>
                    <div className='icon'>
                        <a href='https://www.linkedin.com/in/bao-huynhvannguyen/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        <a href='https://github.com/baco0611' target='_blank'><i className="fa-brands fa-square-github"></i></a>
                    </div>
                    <small>Copyright © Bao Huynh. All rights reserved.</small>
                </div>
            </div>
        </div>  
    )
}
