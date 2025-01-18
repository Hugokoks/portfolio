import { useEffect, useState } from "react";
import ComputerModel from "../ComputerModel/ComputerModel";
import styles from "./Hero.module.css";
import ButtonCustom from "../Button/ButtonCustom";
import { motion } from "framer-motion";

function Hero() {
  const animatedText = "I love to build cool apps".split(" ");

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const delay = visible ? 5000 : 3000;
    const timeout = setTimeout(() => {
      setVisible((prev) => !prev);
    }, delay);
    return () => clearTimeout(timeout);
  }, [visible]);

  return (
    <>
      <section id="hero" className={styles.heroMainBox}>
        <div className={styles.heroTextBox}>
          <h1>Hi, I&apos;am David</h1>
          <h1 style={{ fontSize: "45px", color: "#4dce46" }}>
            Software Developer
          </h1>
          <h1>
            {animatedText.map((el, i) => (
              <motion.span
                initial={{ opacity: visible ? 0 : 1 }}
                animate={{ opacity: visible ? 1 : 0 }}
                transition={{
                  duration: 1,
                  delay: i / 5,
                }}
                key={i}
              >
                {el + " "}
              </motion.span>
            ))}
          </h1>

          <p>
            I&apos;am Developer with Heart in right place that can build
            fullstack application <br />
            with React, Node.JS and SQL
          </p>
          <div className={styles.buttonBox}>
            <ButtonCustom style={{ width: "200px", height: "50px" }}>
              <a href="#contact">Contact me</a>
            </ButtonCustom>
          </div>
        </div>
        <ComputerModel />
      </section>
    </>
  );
}

export default Hero;
