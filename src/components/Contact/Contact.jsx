import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <section className={styles.container} id="contact">
            <p className={styles.subtitle}>Get in Touch</p>
            <h1 className={styles.title}>Contact Me</h1>
            <div className={styles.contactUpperContainer}>
                <div className={styles.contactContainer}>
                    <img src={"assets/emailIcon.png"} alt="Email Icon" className={styles.emailIcon}/>
                    <a href="mailto:nicolekaneshige@gmail.com">Contact Me</a>
                </div>
                <div className={styles.contactContainer}>
                    <img src={"assets/linkedinIcon.png"} alt="Linkedin Icon"  />
                    <a onClick={() => window.open("https://www.linkedin.com/in/nicole-kaneshige-4a3b80216")}>LinkedIn</a>
                </div>
            </div>
        </section>
    );
};