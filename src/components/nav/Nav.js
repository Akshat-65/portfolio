import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage3Line} from 'react-icons/ri'
import styles from './Nav.module.css';
import { useState } from 'react'
const Nav = () => {
    const[activeNav, setActiveNav] = useState('#')
    return ( 
        <nav>
            <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#'?styles.active:''}>{<AiOutlineHome/>}</a>
            <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?styles.active:''}>{<AiOutlineUser/>}</a>
            <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?styles.active:''}>{<BsBook/>}</a>
            <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?styles.active:''}>{<RiServiceLine/>}</a>
            <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?styles.active:''}>{<RiMessage3Line/>}</a>
        </nav>
     );
}
 
export default Nav;