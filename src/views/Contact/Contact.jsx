import Aos from 'aos'
import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import "./Contact.scss"
import clsx from 'clsx'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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

    const [ isValid, setIsValid ] = useState(true)

    const onChangeValue = (e, name) => {
        setMessage(value => {
            return {
                ...value,
                [name]: e.target.value
            }
        })
    }

    const form = useRef(null)

    const getFatherElement = (element) => {
        while (element && element !== document.body) {
            if (element.classList.contains('input-box')) {
                return element;
            }
            element = element.parentElement;
        }
        return null;
    };

    const handleInvalid = (element, message) => {
        const fatherElement = getFatherElement(element)
        fatherElement.classList.add("invalid")
        const errorElement = fatherElement.querySelector(".error-message")
        errorElement.innerHTML = message
    }

    const handleValid = (name, element) => {
        let block = element

        if(!block) {
            block = form.current.querySelector(`#form-${name}`)
        }

        const fatherElement = getFatherElement(block)
        fatherElement.classList.remove("invalid")
        const errorElement = fatherElement.querySelector(".error-message")
        errorElement.innerHTML = ""
    }

    const checkValid = (name) => {
        const element = form.current.querySelector(`#form-${name}`)
        
        if(!element.value) {
            handleInvalid(element, "Please fill out this field")
            return false
        } else
            handleValid(name, element)
        
        if(name == "email") {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!re.test(element.value)) {
                handleInvalid(element, "Please enter your email in the correct format")
                return false
            } else
                handleValid(name, element)
        }

        return true
    }

    const resetForm = () => {
        const contactForm = form.current
        const inputBlock = contactForm.querySelectorAll(".input-box")
        
        inputBlock.forEach(element => {
            const errorElement = element.querySelector(".error-message")

            element.classList.remove("invalid")
            errorElement.innerHTML = ""         
        });

        setMessage({
            name: "",
            email: "",
            message: ""
        })
    }

    const sendEmail = () => {
        emailjs
            .sendForm('service_hvrhrg4', 'template_6fawlae', form.current, {
                publicKey: 'jh6B_-WsdkHcf5mbe',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    resetForm()
                    Swal.fire({
                        icon: "success",
                        title: "Done",
                        text: "Your message has been sent",
                        confirmButtonColor: "#137ffd",
                        confirmButtonText: "Got it!!!"
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        confirmButtonColor: "#137ffd",
                        confirmButtonText: "Got it!!!"
                    });
                },
            );
    };

    const handelSubmit = e => {
        e.preventDefault()
        const name = checkValid("name")
        const email = checkValid("email")
        const message = checkValid("message")

        if(name && email && message) {
            sendEmail()
        }
    }

    return (
        <div className='section' id='contact'>
            <SectionHeader
                section_name={"contact"}
            />
            <div className='contact'>
                <div className='left' data-aos="fade-right" data-aos-once="true">
                    <div className='block' title='Click to send me an email'>
                        <a href='mailto:hvnguyenbao0611@gmail.com'><i className="fa-solid fa-envelope"></i> hvnguyenbao0611@gmail.com</a>
                    </div>
                    <div className='block' title='Click to send me a message'>
                        <a href='sms:+817090152570'><i className="fa-regular fa-comment-dots"></i> (+81)70-9015-2570</a>
                    </div>
                    <div className='block' title='Click to see my Linkedin account'>
                        <a href="https://www.linkedin.com/in/bao-huynhvannguyen/" target='_blank'><i className="fa-brands fa-linkedin-in"></i> Bao Huynh Van Nguyen</a>
                    </div>
                </div>
                <div className='right' data-aos="fade-left" data-aos-once="true">
                    <form ref={form}>
                        <h1>Contact with me</h1>
                        <div className='input-box'>
                            <input 
                                id='form-name'
                                type='text' 
                                className='field' 
                                placeholder='Your name' 
                                name='form-name'
                                required
                                value={message.name}
                                onChange={(e) => onChangeValue(e, "name")}
                                onFocus={() => handleValid("name")}
                                onBlur={() => checkValid("name")}
                            >
                            </input>
                            <p className='error-message'></p>
                        </div>
                        <div className='input-box'>
                            <input 
                                id='form-email'
                                type='text' 
                                className='field' 
                                placeholder='Your email' 
                                name='form-email'
                                required
                                value={message.email}
                                onChange={(e) => onChangeValue(e, "email")}
                                onFocus={() => handleValid("email")}
                                onBlur={() => checkValid("email")}
                            >
                            </input>
                            <p className='error-message'></p>
                        </div>
                        <div className='input-box'>
                            <textarea 
                                id='form-message'
                                type='text' 
                                className='field message' 
                                placeholder='Your message' 
                                name='form-message'
                                required
                                value={message.message}
                                onChange={(e) => onChangeValue(e, "message")}
                                onFocus={() => handleValid("message")}
                                onBlur={() => checkValid("message")}
                            >
                            </textarea>
                            <p className='error-message'></p>
                        </div>
                        <div className='submit'>
                            <button 
                                className={clsx({
                                    "disable": !isValid
                                })}
                                onClick={handelSubmit}
                            >Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
