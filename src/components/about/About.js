import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/Me.jpg';
import styles from './About.module.css';
const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className={`${styles.container} ${styles['about__container']}`}>
                <div className={styles['about__me']}>
                    <div className={styles['about__me-image']}>
                        <img src={ME} alt=""></img>
                    </div>
                </div>
                <div className={styles['about__content']}>
                    <div className={styles['about__cards']}>
                        <article className={styles['about__card']}>
                            <FaAward className={styles['about__icon']} />
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>

                        <article className={styles['about__card']}>
                            <FiUsers className={styles['about__icon']} />
                            <h5>B.Tech</h5>
                            <small>JSSATEN</small>
                        </article>

                        <article className={styles['about__card']}>
                            <VscFolderLibrary className={styles['about__icon']} />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>Coding Ninjas certified Frontend Developer. Comfortable in working with
                        JavaScript, HTML, CSS, React and responsive web design. Understanding
                        and knowledge of core Java, Data structures and Algorithms. Ready to work
                        hard in all phases of growing cycle.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;