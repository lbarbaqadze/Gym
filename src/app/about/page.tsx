'use client'
import styles from "./page.module.css"
import Navbar from "../components/Navbar-One/Navbar"
import Navbar2 from "../components/Navbar-Two/Navbar"
import Slider from "../components/Slider/Slider"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

export default function About() {

    return (
        <>

            <Navbar bgColor="#191a1e" />

            <Navbar2 bgColor="#191a1e" />

            <Header title="About" title2="Us" />

            <div className={styles.containerThree}>
                <div className={styles.div1}>
                    <h1>Why Choose Profimed?</h1>
                    <p>
                        We provide the highest quality medical care, individualized treatment by the country’s
                        leading experts, and in the shortest amount of time. Each patient is assigned a case manager
                        to handle all medical issues.
                    </p>
                    <iframe src="https://www.youtube.com/embed/ZU0f8_C5Pm0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title="YouTube video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className={styles.div2}>
                    <div className={styles.card}>
                        <h4>Departments</h4>
                        <ul>
                            <li>Fitness</li>
                            <li>GYM</li>
                            <li>Powerlifting</li>
                            <li>Circuit</li>
                            <li>Boot Camp</li>
                        </ul>
                    </div>
                    <div className={`${styles.card} ${styles.card1}`}>
                        <h4>OPENING HOURS</h4>
                        <div>
                            <p>Monday-Friday</p>
                            <p className={styles.p}>8.00 - 18.00</p>
                        </div>
                        <div>
                            <p>Saturday</p>
                            <p className={styles.p}>9.00 - 17.00</p>
                        </div>
                        <div>
                            <p>Sunday</p>
                            <p className={styles.p}>9.00 - 15.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerFour}>
                <h1>Inside Our <span>GYM</span></h1>
                <Slider />
            </div>

            <div className={styles.containerSix}>
                <Footer />
            </div>

        </>
    )
}