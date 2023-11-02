import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/Me.jpg";
import ME2 from "../../assets/IMG_20230721_174337.jpg";
import styles from "./About.module.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={`${styles.container} ${styles["about__container"]}`}>
        <div className={styles["about__me"]}>
          <div className={styles["about__me-image"]}>
            <img src={ME2} alt=""></img>
          </div>
        </div>
        <div className={styles["about__content"]}>
          <div className={styles["about__cards"]}>
            <article className={styles["about__card"]}>
              <FaAward className={styles["about__icon"]} />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className={styles["about__card"]}>
              <FiUsers className={styles["about__icon"]} />
              <h5>Software Engineer</h5>
              <small>Avi Software</small>
            </article>

            <article className={styles["about__card"]}>
              <VscFolderLibrary className={styles["about__icon"]} />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Highly skilled Front End Developer with expertise in Java,
            JavaScript, TypeScript, React JS, Redux, CSS, HTML, and MySQL.
            Proficient in problem-solving and data structures. Committed to
            delivering high-quality projects with a focus on innovation and
            efficiency
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
