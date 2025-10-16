'use client'
import styles from "./page.module.css"
import Navbar from "../components/Navbar-One/Navbar"
import Navbar2 from "../components/Navbar-Two/Navbar"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Footer2 from "../components/Contact-Footer/Footer"



export default function Services() {


    return (
        <>
            <Navbar bgColor="#191a1e" />

            <Navbar2 bgColor="#191a1e" />

            <Header title="Services"

                bgImage={{ backgroundImage: "linear-gradient(rgba(0, 0, 5, 0.7), rgba(0, 0, 5, 0.7)), url('/Gym/images/background2.jpg')" }} />

            <div className={styles.containerOne}>
                <div className={styles.componentOne}>
                    <div className={`${styles.card} ${styles.card1}`}>
                        <p className={styles.cardp2}>Fitness</p>
                    </div>
                    <div className={`${styles.card} ${styles.card2}`}>
                        <p className={styles.cardp2}>GYM</p>
                    </div>
                    <div className={`${styles.card} ${styles.card3}`}>
                        <p className={styles.cardp2}>Crossfit</p>
                    </div>
                    <div className={`${styles.card} ${styles.card4}`}>
                        <p className={styles.cardp2}>Powerlifting</p>
                    </div>
                    <div className={`${styles.card} ${styles.card5}`}>
                        <p className={styles.cardp2}>Circuit</p>
                    </div>
                    <div className={`${styles.card} ${styles.card6}`}>
                        <p className={styles.cardp2}>Boot Camp</p>
                    </div>
                </div>
            </div>

        <Footer2 title1="Encompassing All Accessible Exclusive Training"
        title2="We offer extensive training to outbound and inbound customers."/>

        <Footer />

        </>
    )

}