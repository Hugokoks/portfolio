import TopicTitle from "../TopicTitle/TopicTitle";
import styles from "./Contact.module.css";
import InputCustom from "../Input/InputCustom";
import React from "react";
import TextareaCustom from "../Input/TextareaCustom";
import ButtonCustom from "../Button/ButtonCustom";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section id="contact" className={styles.section}>
      <TopicTitle
        title="Contact"
        text="fill out the form below if you want make cool project with me 🤙"
        style={{ marginTop: "0px", marginBottom: "50px", gap: "40px" }}
      />

      <form className={styles.form} onSubmit={handleSubmit}>
        <InputCustom placeHolder="enter your full name" />
        <InputCustom placeHolder="enter your email..." />
        <TextareaCustom placeHolder="enter your message" />
        <ButtonCustom>Submit</ButtonCustom>
      </form>
    </section>
  );
}
