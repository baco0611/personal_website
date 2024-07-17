import React, { useEffect, useState } from 'react'
import "./Experience.scss"
import Aos from 'aos';
import "aos/dist/aos.css"
import SectionHeader from '../SectionHeader/SectionHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Experience() {
    
    const [ experience, setExperience ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("/experience.json")
        .then(response => setExperience(response.data.experience))
        .catch(error => {
            console.log(error)
            navigate("/error")
        })
    }, [])

    useEffect(() => {
        Aos.init({
          duration: 1200, // Đặt thời gian cho hiệu ứng
        });
    }, []);

    return (
        <div className='section' id='experience'>
            <SectionHeader
                section_name="experience"
            />
            <div className='experience-content'>
            {
                experience.map((company, index) => {
                    return (
                        <div className='block' key={index}>
                            <div 
                                className='time' 
                                data-aos="fade-right" 
                                data-aos-once="true"
                            >{company.time}</div>
                            <div 
                                className='content' 
                                data-aos="fade-left"
                                data-aos-once="true"
                            >
                                <h1>{company.company_name}</h1>
                                <p>{company.location}</p>

                                {
                                    company.position.map((position, index) => 
                                        <div className='position' key={index}>
                                            <div className='title'>
                                                <h2>{position.position}</h2>
                                                <h2>{position.time}</h2>
                                            </div>
                                            <ul>
                                                {position.content.map((content, index) =>
                                                    <li key={index}>{content}</li>
                                                )}
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        </div>      
                    )
                })
            }
                          
            </div>
        </div>
    )
}
