import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <ul className='section__links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#testimonials'>Testimonials</a></li>
            <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href="https://www.linkedin.com/in/akshat-upadhyay-0745a4229" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/Akshat-65" target="_blank"><FaGithub /></a>
            </div>
        </footer>
    );
}

export default Footer;