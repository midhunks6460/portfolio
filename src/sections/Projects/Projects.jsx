import styles from "./ProjectsStyles.module.css";
// import viberr from "../../assets/viberr.png";
// import freshBurger from "../../assets/fresh-burger.png";
// import hipsster from "../../assets/hipsster.png";
// import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
// import ecommerce from "../../assets/ecommerce.png";
import market from "../../assets/market.png";
import comm from "../../assets/comm.png";
import earth from "../../assets/earth.png";
import shopping from "../../assets/shopping.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={comm}
          link="https://k-s-commerce.vercel.app/"
          h3="k-s-commerce"
          p="E-Commerce-App"
        />
        <ProjectCard
          src={market}
          link="https://markeringtcj.netlify.app/"
          h3="HUSTLE"
          p="Marketing App"
        />
        <ProjectCard
          src={earth}
          link="https://inquisitive-dodol-b3fc91.netlify.app/"
          h3="TCJ-SPACE"
          p="Earth App"
        />
        <ProjectCard
          src={shopping}
          link="https://shopsy-mks.netlify.app/"
          h3="Shopsy"
          p="Shopping App"
        />
      </div>
    </section>
  );
}

export default Projects;
