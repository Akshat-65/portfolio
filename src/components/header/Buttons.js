import CV from '../../assets/CV.pdf';
import styles from './Buttons.module.css';
const Buttons = ()=>{
    return(
<div className={styles.button}>
    <a href={CV} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's talk</a>
</div>
    )
}
export default Buttons;