import { faCss3, faHtml5, faJsSquare, faReact, faGoogle, faFigma } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const About=()=>{
    
    useEffect(()=>{
        setTimeout(()=>{
           setletterClass('text-animate-hover')
       }, 3000)
   }, [])
    const [letterClass, setletterClass] = useState('text-animate')

    return(
        <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't',' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>I'm very ambitious frontend developer looking for a role in established IT company with the oportunity
                    to work with the latest technologies on challenging and diverse projects.
                </p>
                <p>I'm quietly confident, naturally curious, and perpetually working on imporving
                    my chops one design problem at a time
                </p>
            </div>
            <div className="stage-cube-container">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faJsSquare} color="#dd0031"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28a4d9"/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ed4f4"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faGoogle} color="#5ed4f4"/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faFigma} color="#5ed4f4"/>
                </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}
export default About;