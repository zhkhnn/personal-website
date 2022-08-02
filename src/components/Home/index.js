import './index.scss'
import logo from '../../assets/images/logotransparent.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'


const Home =()=>{
    const [letterClass, setletterClass] = useState('text-animate')
    const nameArray = ['r', 'u', 'z', 'h', 'a', 'n']
    const jobarray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    useEffect(()=>{
         setTimeout(()=>{
            setletterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1><span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span><br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _12`}>'m</span>
                <img src={logo} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobarray} idx={22}/>

                </h1>
                <h2>Frontend Developer / Javascript Expert </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Home;