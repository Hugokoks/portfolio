import React from "react";
import { motion } from "framer-motion";
import styles from "./TextareaCustom.module.css";

export default function TextareaCustom({ placeHolder }) {
  return (
    <motion.textarea
      placeholder={placeHolder}
      whileFocus={{
        scale: 1.05,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={styles.textarea}
    />
  );
}
