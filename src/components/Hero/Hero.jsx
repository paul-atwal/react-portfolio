import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Paul</h1>
        <p className={styles.description}>
          I'm a software developer who loves to learn. Reach out if you'd like
          to learn more!
        </p>
        <a href="mailto:psatwal@sfu.ca" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/AvatarMaker.svg")}
        alt="Hero image of me "
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
