import superheroImage from '../../assets/Superhero.png';
import foodOrderImage from '../../assets/foodOrder.png';
import reactAlbumImage from '../../assets/reactAlbum.png';
import todoImage from '../../assets/todo.png';
import habitImage from '../../assets/habitTracker.png';
import reactTodoImage from '../../assets/reactTodo.png';
import './Portfolio.css';
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item_image">
                        <img src={foodOrderImage} alt='' />
                    </div>
                    <h3>Food Order App</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/Akshat-65/Food-order-App.git" className="btn" target="_blank">Github</a>
                        <a href="https://food-order-app-lets-order-something.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item_image">
                        <img src={superheroImage} alt='' />
                    </div>
                    <h3>Superhero Hunter App</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/Akshat-65/superhero-hunter-app.git" className="btn" target="_blank">Github</a>
                        <a href="https://akshat-65.github.io/superhero-hunter-app/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item_image">
                        <img src={reactAlbumImage} alt='' />
                    </div>
                    <h3>React-Album</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/Akshat-65/react-album.git" className="btn" target="_blank">Github</a>
                        <a href="https://akshat-album-collection.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item_image">
                        <img src={habitImage} alt='' />
                    </div>
                    <h3>Habit tracker</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/Akshat-65/habit-tracker.git" className="btn" target="_blank">Github</a>
                        <a href="https://akshat-habit-tracker.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item_image">
                        <img src={todoImage} alt='' />
                    </div>
                    <h3>Todo-list</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/Akshat-65/todo-list.git" className="btn" target="_blank">Github</a>
                        <a href="https://akshat-65.github.io/todo-list/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item_image">
                        <img src={reactTodoImage} alt='' />
                    </div>
                    <h3>React Todo</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/Akshat-65/react-todo.git" className="btn" target="_blank">Github</a>
                        <a href="https://akshat-assessment.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;