import './Services.css';
import {BiCheck} from 'react-icons/bi'
const Services = () => {
    return (  
    <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                    <h3>UI/UX Design</h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Design ideas using storyboards, process and sitemaps.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Design graphical UI, like menus, tabs and widgets.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Build page navigation buttons and search fields.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Develop UI mockups and prototypes.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Create original graphic designs</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Evaluate user requirements in collaboration.</p>
                    </li>
                </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>Web Development</h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Writing less code in react and build user requirement UI</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Knowledge of react and redux for building complex UI</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Testing web applications.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Knowledge of bootstrap, tailwind and Material-UI</p>
                    </li>
                </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>Content Creation</h3>
                </div>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Blogs: High-quality and well-written pieces about topics.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>CaseStudio: Case studios are a good way of making issues relatable. </p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Listicles: List articles may seem somewhat gimmicky.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Ebook: Type of long-form content.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Knowledge of most popular types of content.</p>
                    </li>
                    <li>
                        <BiCheck className='service__list-icon'/>
                        <p>Gather and evaluate user requirements in collaboration.</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
    );
}
 
export default Services;