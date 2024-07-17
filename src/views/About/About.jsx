import React, { useEffect } from 'react'
import "./About.scss"
import avatar from "./img/avatar.jpg"
import Aos from 'aos';
import "aos/dist/aos.css"
import SectionHeader from '../SectionHeader/SectionHeader';

export default function About() {
    useEffect(() => {
        Aos.init({
          duration: 1200, // Đặt thời gian cho hiệu ứng
        });
    }, []);

    return (
        <div className='section' id='about'>
            <SectionHeader
                section_name = "about"
            />
            <div className='about-content'>
                <div 
                    className='avatar' 
                    data-aos="fade-right"
                    data-aos-once="true"
                >
                    <img src={avatar}/>
                </div>
                <div className='content'>
                    <p 
                        data-aos="fade-left"
                        data-aos-once="true"    
                    >Heya!!! My name is <span>Bao Huynh Van Nguyen</span> and you can call me Bao.</p>
                    <p 
                        data-aos="fade-left"
                        data-aos-once="true"    
                    >I graduated in June 2024 with a degree in <span>Computer Science</span> from Hue University of Sciences (HUSC) in just three years. My goal is to become an <span>AI engineer specializing in computer vision</span> to enhance products like websites and apps.</p>
                    <p 
                        data-aos="fade-left"
                        data-aos-once="true"    
                    >Currently, I am an AI intern at Sky-Field Corporation, where I focus on digital transformation (DX) in construction and learn about automatic image generation models for design applications.</p>
                    <div className='archive'>
                        <div 
                            className='box' 
                            data-aos="fade-up"
                            data-aos-once="true"
                        >
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="2">Education</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>School:</td>
                                        <td>Hue University of Sciences</td>
                                    </tr>
                                    <tr>
                                        <td>Major:</td>
                                        <td>Computer Science</td>
                                    </tr>
                                    <tr>
                                        <td>GPA:</td>
                                        <td>3.76 / 4.00</td>
                                    </tr>
                                    <tr>
                                        <td>Graduated:</td>
                                        <td>June 2024</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div 
                            className='box' 
                            data-aos="fade-up"
                            data-aos-once="true"
                        >
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="2">Skill</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Language:</td>
                                        <td>Javascript (proficient), Python (proficient), C/C++ (intermediate), Java (intermediate)</td>
                                    </tr>
                                    <tr>
                                        <td>Artificial Intelligence:</td>
                                        <td>Keras, TensorFlow, OpenCV, NLTK, Underthesea</td>
                                    </tr>
                                    <tr>
                                        <td>Web & Database</td>
                                        <td>HTML, CSS, ReactJs, Restful API, SQL, MS SQL Server, MySQL</td>
                                    </tr>
                                    <tr>
                                        <td>Technical Skills:</td>
                                        <td>Machine Learning Model Training, Front-end Development, Web design</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
