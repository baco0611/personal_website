import React from 'react'
import "./Home.scss"

export default function Home() {
    return (
        <div className='home-section'>
            <div className='home-background'></div>
            <div className='home-content'>
                <div className='home-content-top'>
                    <p>bao huynh is a</p>
                </div>
                <div className='home-content-main'>
                    <h2>front-end</h2>
                    <h2>developer,</h2>
                </div>
                <div className='home-content-main column'>
                    <h1 className='sign'>&</h1>
                    <div className='side'>
                        <h2>AI</h2>
                        <h2>engineer</h2>
                        <div className='home-navigate'>
                            <a href='./file/bao_huynh_resume.pdf' download="Bao_Huynh_resume.pdf">my resume</a>
                            <p>let's connect</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
