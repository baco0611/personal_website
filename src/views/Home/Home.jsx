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
            <div 
                className='home-background' 
                data-aos="fade-in"
                data-aos-once="true"
            ></div>
            <div className='home-content'>
                <div className='home-content-top'>
                    <p 
                        data-aos="fade-down"
                        data-aos-once="true"
                    >bao huynh is an</p>
                </div>
                <div className='home-content-main'>
                    <h2 
                        data-aos="fade-left"
                        data-aos-once="true"
                    >AI</h2>
                    <h2 
                        data-aos="fade-left"
                        data-aos-once="true"
                    >engineer</h2>
                </div>
                <div className='home-content-main column'>
                    <h1 className='sign' data-aos="fade-left">&</h1>
                    <div className='side' >
                        <h2 
                            data-aos="fade-right"
                            data-aos-once="true"
                        >front-end</h2>
                        <h2 
                            data-aos="fade-right"
                            data-aos-once="true"
                        >developer,</h2>
                        <div 
                            className='home-navigate' 
                            data-aos="fade-up"
                            data-aos-once="true"
                        >  
                            <p>
                                my resume 
                                <a href='/bao_huynh_resume.pdf' download="Bao_Huynh_resume.pdf">(EN)</a>
                                <a href='/bao_huynh_resume_jp.pdf' download="Bao_Huynh_履歴書.pdf">(JP)</a>
                            </p>
                            {/* <a href='/bao_huynh_resume.pdf' download="Bao_Huynh_resume.pdf">my resume (EN)</a> */}
                            {/* <a href='/bao_huynh_resume_jp.pdf' download="Bao_Huynh_履歴書.pdf">my resume (JP)</a> */}
                            <a href='#contact'>let's connect</a>
                        </div>
                        <div 
                            className='home-icon' 
                            data-aos="fade-up"
                            data-aos-once="true"
                        >
                            <a href='https://www.linkedin.com/in/bao-huynhvannguyen/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                            <a href='https://github.com/baco0611' target='_blank'><i className="fa-brands fa-square-github"></i></a>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
