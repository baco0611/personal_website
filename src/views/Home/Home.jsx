import React, { useEffect } from 'react'
import "./Home.scss"
import Aos from 'aos';
import "aos/dist/aos.css"

export default function Home() {
    useEffect(() => {
        Aos.init({
          duration: 1200, // Đặt thời gian cho hiệu ứng
        });
      }, []);

    return (
        <div className='home-section' id='home'>
            <div className='home-background' data-aos="fade-in"></div>
            <div className='home-content'>
                <div className='home-content-top'>
                    <p data-aos="fade-down">bao huynh is an</p>
                </div>
                <div className='home-content-main'>
                    <h2 data-aos="fade-left">AI</h2>
                    <h2 data-aos="fade-left">engineer</h2>
                </div>
                <div className='home-content-main column'>
                    <h1 className='sign' data-aos="fade-left">&</h1>
                    <div className='side' >
                        <h2 data-aos="fade-right">front-end</h2>
                        <h2 data-aos="fade-right">developer,</h2>
                        <div className='home-navigate' data-aos="fade-up">
                            <a href='./file/bao_huynh_resume.pdf' download="Bao_Huynh_resume.pdf">my resume</a>
                            <a href='#contact'>let's connect</a>
                        </div>
                        <div className='home-icon' data-aos="fade-up">
                            <a href='https://www.linkedin.com/in/bao-huynhvannguyen/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                            <a href='https://github.com/baco0611' target='_blank'><i className="fa-brands fa-square-github"></i></a>
                            <div></div>
                        </div>
                        <div className='home-scroll' data-aos="fade-up">
                            <a href='#about'>scroll down<span className='arrow'>&darr; &darr;</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
