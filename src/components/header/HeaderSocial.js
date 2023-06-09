import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import styles from './HeaderSocial.module.css';
const HeaderSocials = () => {
    return ( 
        <div className={styles['header__socials']}>
            <a href="https://www.linkedin.com/in/akshat-upadhyay-0745a4229" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Akshat-65" target="_blank"><FaGithub/></a>
        </div>
     );
}
 
export default HeaderSocials;