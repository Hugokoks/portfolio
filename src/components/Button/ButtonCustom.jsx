import React from "react";
import styles from "./ButtonCustom.module.css";
import { motion } from "framer-motion";

export default function ButtonCustom({ children, style }) {
  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className={styles.button}
      style={style}
    >
      {children}
    </motion.button>
  );
}
