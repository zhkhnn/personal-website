import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Contact =()=>{
    useEffect(()=>{
        setTimeout(()=>{
           setletterClass('text-animate-hover')
       }, 3000)
   }, [])
    const [letterClass, setletterClass] = useState('text-animate')

    return(
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    letterClass={letterClass} idx={15}/>
                </h1>
                <p>
                    I'm interested in freelance opportunities - especially ambitious or large projects.
                    However, if you have other request or question, don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form action="">
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder='message' required id="" cols="30" rows="10"></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="Send" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
</>
    )
}
export default Contact;