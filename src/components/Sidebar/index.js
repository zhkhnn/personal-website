import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import logo from '../../assets/images/logotransparent.png'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>{
    return (
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={logo} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>

                </NavLink>
                <NavLink exact="true" activeclassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>

                </NavLink><NavLink exact="true" activeclassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>

                </NavLink>
            </nav>
            <ul>
                <li><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/aruzhan-zhakhan/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a></li>
                    <li><a target="_blank" rel="noreferrer" href='https://github.com/zhkhnn'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a></li>
                    <li><a target="_blank" rel="noreferrer" href='https://www.instagram.com/arzhkhnh/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                    </a></li>
            </ul>

        </div>
    )
}
export default Sidebar;