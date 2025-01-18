import React from "react";
import { motion } from "framer-motion";
import styles from "./InputCustom.module.css";

export default function InputCustom({ placeHolder }) {
  return (
    <motion.input
      whileFocus={{
        scale: 1.05,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      placeholder={placeHolder}
      className={styles.input}
    />
  );
}
