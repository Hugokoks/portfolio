import styles from "./TopicTitle.module.css";
import arrowDown from "./../../assets/arrowDown.png";

import React from "react";

export default function TopicTitle({ title, style, text }) {
  return (
    <div style={style} className={styles.topicTitleBox}>
      <h1 style={{ fontSize: "45px" }}>{title}</h1>
      <p
        style={{
          fontSize: "28px",
        }}
      >
        {text}
      </p>
      <img src={arrowDown} style={{ width: "50px" }}></img>
    </div>
  );
}
