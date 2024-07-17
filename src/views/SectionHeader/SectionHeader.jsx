import React from 'react'

export default function SectionHeader({ section_name }) {
    return (
        <div className='section-title'>
            <div 
                className='background' 
                data-aos="fade-right"
                data-aos-once="true"
            ></div>
            <h1 
                data-aos="fade-left"
                data-aos-once="true"
            >{section_name}</h1>
        </div>
    )
}
