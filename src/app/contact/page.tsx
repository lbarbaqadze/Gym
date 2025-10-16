'use client'
import styles from "./page.module.css"
import Navbar from "../components/Navbar-One/Navbar"
import Navbar2 from "../components/Navbar-Two/Navbar"
import Footer from "../components/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNotesMedical, faHeartPulse, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"

export default function Contact() {

    const [service, setService] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = { service, name, phone, date };

        try {
            const res = await fetch("/api/contactApi", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            alert(data.message || "Form submitted successfully!");
        } catch (err) {
            console.error(err);
            alert("Error submitting form");
        }
    };

    return (
        <>
            <Navbar bgColor="#191a1e" />

            <Navbar2 bgColor="#191a1e" />

            <div className={styles.containerOne}>
                <div className={styles.componentOne}>
                    <h5>Contact Details</h5>
                    <p className={styles.p1}>Our Crossfit Studio is the preferred choice for diplomats and employees from 64 embassies,
                        consulates and UN agencies, as well as private patients from over 60 countries.</p>
                    <div>
                        <h6>Emergency Cases</h6>
                        <p className={styles.p}>800 123 42 46</p>
                    </div>
                    <div>
                        <h6>Email</h6>
                        <p className={styles.p}>info@crossarena.com</p>
                    </div>
                    <div>
                        <h6>Address</h6>
                        <p className={styles.p}>125 Wallstreet, NY, USA</p>
                    </div>
                </div>
                <div className={styles.componentTwo}></div>
            </div>

            <div className={styles.containerTwo}>
                <div className={styles.card} style={{ backgroundColor: "#2e2f35" }}>
                    <div>
                        <FontAwesomeIcon icon={faNotesMedical}
                            style={{ color: "white", fontSize: "40px" }}
                        />
                        <h6>Experienced Physicins</h6>
                        <p>Your health is your most important asset. You should
                            entrust it only to the best professionals.</p>
                    </div>
                </div>
                <div className={styles.card} style={{ backgroundColor: "#303035" }}>
                    <div>
                        <FontAwesomeIcon icon={faHeartPulse}
                            style={{ color: "white", fontSize: "35px" }}
                        />
                        <h6 style={{ fontSize: "26px" }}>Personalized Treatment</h6>
                        <p>Treatment choices perfectly match your goals of
                            treatment complications with early intervention.</p>
                    </div>
                </div>
                <div className={styles.card} style={{ backgroundColor: "#313237" }}>
                    <div>
                        <FontAwesomeIcon icon={faUserDoctor}
                            style={{ color: "white", fontSize: "40px" }}
                        />
                        <h6>Immediate Service</h6>
                        <p>Your treatment plan is designed for steady progress,
                            with every phase promptly implemented.</p>
                    </div>
                </div>
            </div>

            <div className={styles.containerThree}>
                <div className={styles.componentThree}>
                    <img src="/Gym/images/map.png" alt="" />
                </div>
                <div className={styles.componentFour}>
                    <div>
                        <h4>GYM #1</h4>
                        <p>4096 N Highland St, Arlington VA 32101, USA <br /> info@profimed.com 940 1434 21 46</p>
                        <h4>Opening Hours</h4>
                        <p>Mon-Thu: 9:30 & 21:00 <br />
                            Fri: 6:00 & 19:00 <br />
                            Sat: 11:00 & 13:00</p>
                    </div>
                    <div>
                        <h4>GYM #2</h4>
                        <p>5032 B NewYork St, Arlington SA 35201, USA <br /> info@profimed.com 800 1234 56 78</p>
                        <h4>Opening Hours</h4>
                        <p>Mon-Thu: 10:30 & 21:00 <br />
                            Fri: 7:00 & 20:00 <br />
                            Sat: 10:00 & 15:00</p>
                    </div>
                </div>
            </div>

            <div className={styles.containerFour}>
                <h3>Our Specialist</h3>
                <form onSubmit={handleSubmit}>
                    <select name="service"
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                    >
                        <option value="" disabled>
                            Select Service
                        </option>
                        <option value="gym">GYM</option>
                        <option value="powerlifting">Powerlifting</option>
                        <option value="circuit">Circuit</option>
                        <option value="dfitness">DFitness</option>
                        <option value="crossfit">CrossFit</option>
                    </select>

                    <input type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input type="number"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <input type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <button type="submit">Book Appointment</button>
                </form>
            </div>

            <Footer />

        </>
    )

}