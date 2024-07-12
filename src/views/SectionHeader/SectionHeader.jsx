import React from 'react'

export default function SectionHeader({ section_name }) {
    return (
        <div className='section-title'>
            <div className='background' data-aos="fade-right"></div>
            <h1 data-aos="fade-left">{section_name}</h1>
        </div>
    )
}
