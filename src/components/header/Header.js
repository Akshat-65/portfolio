import Buttons from './Buttons';
import HeaderSocials from './HeaderSocial';
import styles from './Header.module.css';
import ME from '../../assets/Me.jpg';
const Header = () => {
    return (
        <header>
            <div className={`${styles.container} ${styles['header__container']}`}>
                <h5>Hello I'm</h5>
                <h1>Akshat</h1>
                <h5 className='text-light'>FrontEnd Developer</h5>
                <Buttons />
                <HeaderSocials />
                    <img src={ME} alt='me' className={styles.me} />
                <a href='#contact' className={styles['scroll_down']}>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;