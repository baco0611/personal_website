import React, { useEffect, useState } from 'react'
import "./Portfolio.scss"
import SectionHeader from '../SectionHeader/SectionHeader'
import Aos from 'aos'
import "aos/dist/aos.css"
import * as image from "./img"
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    useEffect(() => {
        Aos.init({
          duration: 1200, // Đặt thời gian cho hiệu ứng
        });
    }, []);

    const [portfolioList, setPortfolioList] = useState([])

    useEffect(() => {
        axios.get("/portfolio.json")
        .then(response => setPortfolioList(response.data.portfolio))
        .catch(error => {
            console.log(error)
            navigate("/error")
        })
    },[])

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
                            title='Click on each project to read more details.'
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

            </div>
        </div>
    )
}
