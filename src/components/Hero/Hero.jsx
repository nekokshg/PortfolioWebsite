import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nicole</h1>
            <p className={styles.description}>I'm currently pursuing my Bachelor's in Computer Science at the University of Nevada - Las Vegas. In my free time, I enjoy working on both frontend and backend projects!</p>
            
            <div className={styles.btnContainer}>
                <a className={styles.contactBtn} onClick={() => window.open("assets/NicoleKaneshigeResume.pdf")}>Download CV</a>
                <a className={styles.contactBtn} href="mailto:nicolekaneshige@gmail.com">Contact Me</a>
            </div>

            <div className={styles.socialsContainer}>
                <img className={styles.socialsBtn} src="assets/githubIcon.png" alt="Github Icon" onClick={() => window.open("https://github.com/nekokshg/")}/>
                <img className={styles.socialsBtn} src="assets/linkedinIcon.png" alt="Linkedin Icon" onClick={() => window.open("https://www.linkedin.com/in/nicole-kaneshige-4a3b80216")}/>
            </div>           
        </div>
        <img className={styles.heroImg} src={"assets/heroImage.png"} alt="Hero image of me" />

        {/* Highlight background divs */}
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    )
};