import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import "./Contact.scss"

export default function Contact() {
    useEffect(() => {
        Aos.init({
            duration: 1200
        })
    }, [])

    const [ message, setMessage ] = useState({
        name: "",
        email: "",
        message: ""
    })

    const onChangeValue = (e, name) => {
        setMessage(value => {
            return {
                ...value,
                name: e.value
            }
        })
    }

    return (
        <div className='section' id='contact'>
            <SectionHeader
                section_name={"contact"}
            />
            <div className='contact'>
                <div className='left' data-aos="fade-right" data-aos-once="true">
                    <div className='block' title='Click to send me an email'>
                        <a href='mailto:hvnguyenbao0611@gmail.com'><i class="fa-solid fa-envelope"></i> hvnguyenbao0611@gmail.com</a>
                    </div>
                    <div className='block' title='Click to send me a message'>
                        <a href='sms:+817090152570'><i class="fa-regular fa-comment-dots"></i> (+81)70-9015-2570</a>
                    </div>
                    <div className='block' title='Click to see my Linkedin account'>
                        <a href="https://www.linkedin.com/in/bao-huynhvannguyen/" target='_blank'><i class="fa-brands fa-linkedin-in"></i> Bao Huynh Van Nguyen</a>
                    </div>
                </div>
                <div className='right'>
                    <form>
                        <h1>Contact with me</h1>
                        <div className='input-box'>
                            <input 
                                type='text' 
                                className='field' 
                                placeholder='Your name' 
                                required
                                value={message.name}
                                onChange={(e) => setMessage(e, "name")}
                            >
                            </input>
                        </div>
                        <div className='input-box'>
                            <input 
                                type='text' 
                                className='field' 
                                placeholder='Your email' 
                                required
                                value={message.email}
                                onChange={(e) => setMessage(e, "email")}
                            >
                            </input>
                        </div>
                        <div className='input-box'>
                            <textarea 
                                type='text' 
                                className='field message' 
                                placeholder='Your message' 
                                required
                                value={message.message}
                                onChange={(e) => setMessage(e, "message")}
                            >
                            </textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
