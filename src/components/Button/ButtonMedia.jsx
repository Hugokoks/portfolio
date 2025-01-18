import React from "react";
import styles from "./ButtonMedia.module.css";

export default function ButtonMedia({ src }) {
  return (
    <a className={styles.buttonBox} href="">
      <img className={styles.img} width={60} src={src} />
    </a>
  );
}
