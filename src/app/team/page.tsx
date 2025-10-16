'use client'
import styles from "./page.module.css"
import Navbar from "../components/Navbar-One/Navbar"
import Navbar2 from "../components/Navbar-Two/Navbar"
import Footer from "../components/Footer/Footer"
import Footer2 from "../components/Contact-Footer/Footer"
import Header from "../components/Header/Header"


export default function Team() {

    return (
        <>
            <Navbar bgColor="#191a1e" />

            <Navbar2 bgColor="#191a1e" />

            <Header title="Meet Our Professional" title2="Team" style={{ textAlign: "center" }}

                bgImage={{ backgroundImage: "linear-gradient(rgba(0, 0, 5, 0.7), rgba(0, 0, 5, 0.7)), url('/Gym/images/background3.jpg')" }} />

            <div className={styles.containerOne}>
                <h1>Medical Speacialist</h1>
                <div className={styles.componentOne}>
                    <div className={styles.card}>
                        <img src="/Gym/images/team-images/img1.png" alt="" />
                        <div className={styles.name}>
                            <p className={styles.p1}>COACH</p>
                            <p className={styles.p2}>Dominic Snyder</p>
                        </div>
                        <div className={styles.contact}>
                            <p className={styles.p1}>+ 323 443 03 43</p>
                            <p className={styles.p2} style={{ color: "white" }}>info@crossarena.com</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="/Gym/images/team-images/img2.png" alt="" />
                        <div className={styles.name}>
                            <p className={styles.p1}>YOGA COACH</p>
                            <p className={styles.p2}>Virgil Cook</p>
                        </div>
                        <div className={styles.contact}>
                            <p className={styles.p1}>+ 800 123 45 67</p>
                            <p className={styles.p2} style={{ color: "white" }}>info@crossarena.com</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="/Gym/images/team-images/img3.png" alt="" />
                        <div className={styles.name}>
                            <p className={styles.p1}>OWNED/HEAD COACH</p>
                            <p className={styles.p2}>Julie Ayokee</p>
                        </div>
                        <div className={styles.contact}>
                            <p className={styles.p1}>+ 483 392 49 23</p>
                            <p className={styles.p2} style={{ color: "white" }}>info@crossarena.com</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="/Gym/images/team-images/img4.png" alt="" />
                        <div className={styles.name}>
                            <p className={styles.p1}>MEDICAL COACH</p>
                            <p className={styles.p2}>Brenda Flores</p>
                        </div>
                        <div className={styles.contact}>
                            <p className={styles.p1}>+ 304 959 41 95</p>
                            <p className={styles.p2} style={{ color: "white" }}>info@crossarena.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerTwo}>
                <h1>Meet Our Professional <span>Team</span></h1>
                <p>Medical Center has been a medical service provider in all fields of medicine for the Diplomats and
                    their families for the past twenty years
                    and keeps on maintaining a successful cooperation between the two bodies.</p>
                <div className={styles.componentTwo}>
                    <div className={styles.cardOne}>
                        <img src="/Gym/images/team-images/cert1.png" alt="" />
                    </div>
                    <div className={styles.cardOne}>
                        <img src="/Gym/images/team-images/cert2.png" alt="" />
                    </div>
                    <div className={styles.cardOne}>
                        <img src="/Gym/images/team-images/cert3.png" alt="" />
                    </div>
                    <div className={styles.cardOne}>
                        <img src="/Gym/images/team-images/cert4.png" alt="" />
                    </div>
                    <div className={styles.cardOne}>
                        <img src="/Gym/images/team-images/cert5.png" alt="" />
                    </div>
                    <div className={styles.cardOne}>
                        <img src="/Gym/images/team-images/cert6.png" alt="" />
                    </div>
                </div>
            </div>

            <Footer2 title1="Encompassing All Accessible Exclusive Medical Treatment"
                title2="We offer extensive medical procedures to outbound and inbound patients."
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 5, 0.7), rgba(0, 0, 5, 0.7)), url('/Gym/images/background4.jpg')" }} />

            <Footer />

        </>
    )
}