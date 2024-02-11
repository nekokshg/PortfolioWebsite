import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Education.module.css";

export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <img src={getImageUrl("education/UNLV.png")} alt="UNLV icon" className={styles.educationImage}/>
                <div className={styles.educationDetails}>
                    <h3>University of Nevada - Las Vegas</h3>
                    <p>September 2022 - December 2024</p>
                    <p>GPA: 3.9</p>
                    <ul>
                        <li>Major in Computer Science</li>
                        <li>Minor in Mathematics</li>
                        <li>Dean's List 2022 - 2024</li>
                        <li>Majorie and Victor Kunkel Scholarship Award 2023 - 2024</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};