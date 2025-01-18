import React from "react";
import styles from "./Footer.module.css";
import ButtonMedia from "../Button/ButtonMedia";
import facebookIcon from "./../../assets/facebook.png";
import githubIcon from "./../../assets/github.png";
import instagramIcon from "./../../assets/instagram.png";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© 2025 made by Kori with good mood</p>
      <div className={styles.mediaBox}>
        <ButtonMedia src={facebookIcon} />
        <ButtonMedia src={githubIcon} />
        <ButtonMedia src={instagramIcon} />
      </div>
    </footer>
  );
}
