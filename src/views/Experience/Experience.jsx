import React, { useEffect } from 'react'
import "./Experience.scss"
import Aos from 'aos';
import "aos/dist/aos.css"
import SectionHeader from '../SectionHeader/SectionHeader';

export default function Experience() {
    
    const experience = [
        {
            time: "Mar 2024 - present",
            company_name: "Sky-field Corporation",
            location: "Toshima, Tokyo, Japan",
            position: [
                {
                    position: "AI Internship",
                    time: "Mar 2024 - present",
                    content: [
                        "Better understanding of the process and importance of digital transformation (DX) in the architecture industry, especially in Japan.",
                        "Studying basic computer vision algorithms and automatic image generation models such as DCGAN and MirrorGAN."
                    ]
                }
            ]
        },
        {
            time: "Apr 2023 – Aug 2023",
            company_name: "BRYCEN VIETNAM",
            location: "Hue, Thua Thien Hue, VietNam",
            position: [
                {
                    position: "AI Internship",
                    time: "Apr 2023 – Aug 2023",
                    content: [
                        "Understanding of development trends in the information technology industry and basic knowledge of computer science.",
                        "Studying fundamental concepts and theories of Natural Language Processing (NLP), then implementing various NLP models, including state‑of‑the‑art (SOTA) approaches.",
                        "Building a simple chatbot application using the OpenAI API key."
                    ]
                }
            ]
        },
        {
            time: "Sep 2022 – Jun 2023",
            company_name: "KIS-GE INTERNSHIP PROGRAM",
            location: "Hue, Thua Thien Hue, VietNam",
            position: [
                {
                    position: "Participant in KIS-GE Internship Program",
                    time: "Sep 2022 – Jun 2023",
                    content: [
                        "Managing a team of 4 people building a game using Unity, C#, and web using ReactJs framework for front-end, and Laravel framework for back-end.",
                        "Conceptualizing, analyzing, and designing content as well as assigning work to members based on the Trello platform, storing documents using Google Drive, and meeting over 75% of business criteria.",
                        "Develop strategies and plans to keep the whole team above 70% on track and edit timelines when things go wrong.",
                        "Programming a website for a project that uses the ReactJs framework and connects to the backend via an API."
                    ]
                },
                {
                    position: "Participant in KIS-GE Internship Program",
                    time: "Sep 2022 – Jun 2023",
                    content: [
                        "Japanese - Vietnamese interpretation at meetings, classes, and at exchange programs between schools, and companies with students.",
                        "Managing, submitting ideas, tracking, and monitoring work structure and progress.",
                        "Providing project reports, offering solutions, and coordinating to resolve issues that may arise during product development."
                    ]
                }
            ]
        },
        {
            time: "May 2022 – Sep 2022",
            company_name: "HUE UNIVERSITY OF SCIENCES",
            location: "Hue, Thua Thien Hue, VietNam",
            position: [
                {
                    position: "Participant at Central Programming League",
                    time: "May 2022 – Sep 2022",
                    content: [
                        "Studying and analyzing algorithms (greedy, recursion, etc.) to solve problems in ACM-ICPC competitions.",
                        "Solving practice problems and supporting other members in the process of finding the best solution.",
                        "Top 10 Final Competition \"Central Programming League - Hue 2022\""
                    ]
                }
            ]
        },
    ]

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
                            <div className='time' data-aos="fade-right">{company.time}</div>
                            <div className='content' data-aos="fade-left">
                                <h1>{company.company_name}</h1>
                                <p>{company.location}</p>

                                {
                                    company.position.map((position, index) => 
                                        <div className='position' key={index} data-aos="fade-left">
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
