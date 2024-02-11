import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nicole</h1>
            <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit omnis rerum placeat deserunt culpa cupiditate nesciunt consequatur repellat, dolor earum adipisci repudiandae. Iusto aperiam officia aspernatur, exercitationem illo amet ab!</p>
            
            <div className={styles.btnContainer}>
                <a className={styles.contactBtn} onClick={() => window.open("../../assets/NicoleKaneshigeResume.pdf")}>Download CV</a>
                <a className={styles.contactBtn} href="mailto:nicolekaneshige@gmail.com">Contact Me</a>
            </div>

            <div className={styles.socialsContainer}>
                <img className={styles.socialsBtn} src="../../assets/contact/githubIcon.png" alt="Github Icon" onClick={() => window.open("https://github.com/nekokshg/")}/>
                <img className={styles.socialsBtn} src="../../assets/contact/linkedinIcon.png" alt="Linkedin Icon" onClick={() => window.open("https://www.linkedin.com/in/nicole-kaneshige-4a3b80216")}/>
            </div>           
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />

        {/* Highlight background divs */}
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    )
};