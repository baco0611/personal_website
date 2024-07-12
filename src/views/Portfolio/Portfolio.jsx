import React, { useEffect } from 'react'
import "./Portfolio.scss"
import SectionHeader from '../SectionHeader/SectionHeader'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Portfolio() {
    useEffect(() => {
        Aos.init({
          duration: 1200, // Đặt thời gian cho hiệu ứng
        });
    }, []);

    return (
        <div className='section' id='portfolio'>
            <SectionHeader
                section_name="portfolio"
            />
        </div>
    )
}
