import styles from "./Skills.module.css";
import arrowDown from "./../../assets/arrowDown.png";
import reactIcon from "./../../assets/reactIcon.png";
import nodeJsIcon from "./../../assets/nodejsIcon.png";
import sqlIcon from "./../../assets/sqlIcon2.png";
import Skill from "../Skill/Skill";
import TopicTitle from "../TopicTitle/TopicTitle";

function About() {
  return (
    <section id="about" className={styles.container}>
      <TopicTitle style={{ marginBottom: "50px" }} title="What i do" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          marginTop: "50px",
        }}
      >
        <Skill
          imgSrc={reactIcon}
          title={"React for frontend"}
          paragraph="I have more than one year of hands-on experience using React to build sleek, interactive user interfaces. By leveraging Hooks, 
          context APIs, and state management tools like Redux, I ensure that front-end architectures remain both efficient and maintainable. 
          My focus on reusable components and responsive design enables me to create web apps that look great on any screen size."
          paragraphSecond=""
        />
        <Skill
          imgSrc={nodeJsIcon}
          title={"Node.js for backend"}
          paragraph="For the past years and half, I’ve focused on building robust backend solutions with Node.js. By employing frameworks such as Express.js, 
          I develop scalable RESTful APIs that handle real-time data and complex logic with ease. My code is designed to be modular and secure, 
          paving the way for maintainable server-side applications that can grow alongside project requirements."
        />
        <Skill
          imgSrc={sqlIcon}
          title={"SQL for database"}
          paragraph="Over year and half of working with SQL have honed my ability to design efficient database schemas and write optimized queries. 
          I prioritize data integrity by using best practices like indexing, normalization, and transaction management. Whether it’s large-scale 
          enterprise data or smaller application databases, I ensure data is organized, accessible, and secure at all stages."
        />
      </div>
    </section>
  );
}

export default About;
