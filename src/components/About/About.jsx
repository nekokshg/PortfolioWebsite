import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={"assets/aboutImage.png"} alt="Me sitting with a laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={"assets/programming.png"} alt="Programming icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>As a frontend developer, I am skilled in building responsive and optimized sites using HTML, CSS, Javascript, and React</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={"assets/data-server.png"} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>As a backend developer, I am proficient in developing swift and optimized backend systems and APIs using Python, C++, and C</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem} ><img src={"assets/game-control.png"} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Game Developer</h3>
                            <p>As a game developer, I have experience in designing and developing 2D and 3D games using C# in the Unity Game Engine</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};