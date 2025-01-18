import { useState } from "react";
import styles from "./Skill.module.css";
import { motion } from "framer-motion";

function Skill({ imgSrc, title, paragraph }) {
  const [isOpen, setIsOpen] = useState(false);
  const closedTextMaxLenght = 155;
  const paragraphExpanded = paragraph.slice(closedTextMaxLenght, -1).split(" ");
  return (
    <motion.div
      className={`${styles.skillBox} ${isOpen ? styles.opened : ""}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      onClick={() => setIsOpen((value) => !value)}
    >
      <img src={imgSrc} />
      <h1>{title}</h1>

      {isOpen ? (
        <>
          <p>
            {paragraph.slice(0, closedTextMaxLenght)}
            {paragraphExpanded.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: i / 60,
                }}
                key={i}
              >
                {el + " "}
              </motion.span>
            ))}
          </p>
        </>
      ) : (
        <p>{paragraph.slice(0, closedTextMaxLenght) + "..."}</p>
      )}
    </motion.div>
  );
}

export default Skill;

/*
REACT
I have more than one year of hands-on experience using React to build sleek, interactive user interfaces. By leveraging Hooks, 
context APIs, and state management tools like Redux, I ensure that front-end architectures remain both efficient and maintainable. 
My focus on reusable components and responsive design enables me to create web apps that look great on any screen size.
 */

/* 
NODE JS
For the past years and half, I’ve focused on building robust backend solutions with Node.js. By employing frameworks such as Express.js, 
I develop scalable RESTful APIs that handle real-time data and complex logic with ease. My code is designed to be modular and secure, 
paving the way for maintainable server-side applications that can grow alongside project requirements.
*/

/*

Over year and half of working with SQL have honed my ability to design efficient database schemas and write optimized queries. 
I prioritize data integrity by using best practices like indexing, normalization, and transaction management. Whether it’s large-scale 
enterprise data or smaller application databases, I ensure data is organized, accessible, and secure at all stages.
*/
