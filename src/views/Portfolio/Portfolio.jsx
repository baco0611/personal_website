import React, { useEffect, useState } from 'react'
import "./Portfolio.scss"
import SectionHeader from '../SectionHeader/SectionHeader'
import Aos from 'aos'
import "aos/dist/aos.css"
import * as image from "./img"
import axios from 'axios'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

export default function Portfolio() {
    useEffect(() => {
        Aos.init({
          duration: 150, // Đặt thời gian cho hiệu ứng
        });
    }, []);

    const [ portfolioList, setPortfolioList ] = useState([])
    const [ elementActive, setElementActive ] = useState(-1) 

    useEffect(() => {
        axios.get("/portfolio.json")
        .then(response => setPortfolioList(response.data.portfolio))
        .catch(error => {
            console.log(error)
            navigate("/error")
        })
    },[])

    const getFatherElement = (element, fatherClass) => {
        while (element && element !== document.body) {
            if (element.classList.contains(fatherClass)) {
                return element;
            }
            element = element.parentElement;
        }
        return null
    }

    const handleOpenElement = (e, index) => {
        const element = e.target
        const fatherElement = getFatherElement(element, "button")

        if(!fatherElement)
            setElementActive(index)
    }

    const handleCloseHidden = e => {
        const element = e.target
        const fatherElement = getFatherElement(element, "hidden-content")

        if(!fatherElement)
            setElementActive(-1)
    }

    return (
        <div className='section' id='portfolio'>
            <SectionHeader
                section_name="portfolio"
            />
            <div className='portfolio'>
            {
                portfolioList.map((project, index) => {
                    return (
                        <div 
                            className="element cursorPointer" 
                            key={index}
                            title='Click to read more details.'
                            onClick={(e) => handleOpenElement(e, index)}
                            data-aos="fade-up"
                            data-aos-once="true"
                        >
                            <img
                                src={image[project.thumbnail] || image.error}
                            />
                            <h1 className='text-ellipsis'>{project.title}</h1>
                            <p className='text-ellipsis'>Tech: {project.technology}</p>
                            <div className='button'>
                                <button disabled={!project.github}>
                                    <Link
                                        to={project.github || '#'}
                                        target='_blank'
                                        className={!project.github ? 'disabled-link' : ''}
                                    >
                                        Github
                                    </Link>
                                </button>
                                <button disabled={!project.demo}>
                                    <Link
                                        to={project.demo || '#'}
                                        target='_blank'
                                        className={!project.demo ? 'disabled-link' : ''}
                                    >
                                        Demo
                                    </Link>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className='hidden-portfolio'>
                <div 
                    className={clsx("hidden-wrap", {
                        "none": elementActive == -1
                    })}
                    onClick={handleCloseHidden}
                >
                {
                    portfolioList.map((project, index) => {
                        if(index == elementActive)
                            return (
                                <div className='hidden-content' key={index}>
                                    <i 
                                        className="fa-solid fa-square-xmark close-button cursorPointer"
                                        onClick={() => setElementActive(-1)}
                                    ></i>
                                    <img
                                        src={image[project.thumbnail] || image.error}
                                    />
                                    <h1 className='text-ellipsis'>{project.title}</h1>
                                    <p className='text-ellipsis'>Tech: {project.technology}</p>
                                    <ul>
                                        {
                                            project.content.split("\n").map((sentence, index) => {
                                                return <li key={index}>{sentence}</li>       
                                            })
                                        }
                                    </ul>
                                    <div className='button'>
                                        <button disabled={!project.github}>
                                            <Link
                                                to={project.github || '#'}
                                                target='_blank'
                                                className={!project.github ? 'disabled-link' : ''}
                                            >
                                                Github
                                            </Link>
                                        </button>
                                        <button disabled={!project.demo}>
                                            <Link
                                                to={project.demo || '#'}
                                                target='_blank'
                                                className={!project.demo ? 'disabled-link' : ''}
                                            >
                                                Demo
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            )
                    })
                }
                </div>
            </div>
        </div>
    )
}
