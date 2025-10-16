'use client'
import styles from "./page.module.css"
import Navbar from "./components/Navbar-One/Navbar"
import Navbar2 from "./components/Navbar-Two/Navbar"
import Button from "./components/Button/Button"
import Information from "./components/Information/Information"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react"
import Footer from "./components/Footer/Footer"
import Link from "next/link"


export default function Home() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = { name, email, phone, message };

        try {
            const res = await fetch("/api/homeApi", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            alert(data.message || "Form submitted successfully!");

            setName("");
            setEmail("");
            setPhone("");
            setMessage("");

        } catch (err) {
            console.error(err);
            alert("Error submitting form");
        }
    };


    type ProgramKey = "marafon" | "openTraining" | "crossfit" | "cardio" | "legTraining"

    const [selectedProgram, setSelectedProgram] = useState<ProgramKey | null>(null)

    const programs = {
        marafon: {
            title1: "Monday - Marafon",
            title2: "Mondays Marafon session is where endurance meets determination. This is a full-body cardio challenge designed to push your limits through continuous movement, interval running, and dynamic strength circuits."
        },
        openTraining: {
            title1: "Thursday - Open Training",
            title2: "Our Open Training sessions give you the freedom to focus on what you want. Whether its lifting, mobility, or cardio, the space and equipment are yours to use. Coaches are nearby for guidance, but this is your time to personalize your progress."
        },
        crossfit: {
            title1: "Friday - CrossFit",
            title2: "CrossFit Friday is all about functional strength, intensity, and community. Every workout is a new challenge — a mix of weightlifting, bodyweight training, and endurance drills."
        },
        cardio: {
            title1: "Saturday - Cardio",
            title2: "Saturday is for heart-pounding cardio sessions that boost endurance, coordination, and energy. High tempo, fast movements, and music that keeps you going."
        },
        legTraining: {
            title1: "Sunday - Leg Training",
            title2: "Sundays leg session builds power and stability — squats, lunges, and jumps that strengthen your foundation and improve overall athletic performance."
        }
    }


    return (
        <>
            <div className={styles.containerOne}>
                <Navbar />
                <Navbar2 />
                <div className={styles.componentOne}>
                    <h1>CROSSFIT</h1>
                    <Button title="Train Now!" link="/services" />
                </div>
            </div>
            <div className={styles.containerTwo}>
                <div className={styles.componentTwo}>
                    <div className={styles.title}>
                        <h1>WELCOME TO <span>CROSSARENA</span></h1>
                        <p className={styles.p1}>SINCE OUR OPENING DAY, OUR GYM CLASSES HAVE PROVIDED AN INSPIRING WELCOMING FOR EVERBODY!</p>
                        <p className={styles.p2}>That makes every attendee feel like they are a part of one big and passionate community! With that in mind, you can always reach our fitness instructors for any assistance.</p>
                        <p className={styles.p2}>Their ultimate goal is to make you as fit and strong as only possible. All you need is to come to CrossArena and prepare for workout!</p>
                        <Button title="Read More" link="/about" style={{ width: "10em", fontSize: "17px", fontWeight: "600" }} />
                    </div>
                    <div className={styles.img}>
                        <img src="/Gym/images/crossfit6.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.containerThree}>
                <h1>OUR <span>PROGRAMS</span></h1>
                <p className={styles.p3}>At CrossArena, we teach functional movements
                    with emphasis on technique, progression, and efficiency.</p>
                <div className={styles.componentThree}>
                    <div className={`${styles.card} ${styles.card1}`} onClick={() => setSelectedProgram("marafon")}>
                        <p className={styles.cardp1}>MONDAY 11:00AM</p>
                        <p className={styles.cardp2}>MARAFON</p>
                    </div>
                    <div className={`${styles.card} ${styles.card2}`} onClick={() => setSelectedProgram("openTraining")}>
                        <p className={styles.cardp1}>Thursday 10:00AM</p>
                        <p className={styles.cardp2}>OPEN TRAINING</p>
                    </div>
                    <div className={`${styles.card} ${styles.card3}`} onClick={() => setSelectedProgram("crossfit")}>
                        <p className={styles.cardp1}>Friday 14:00PM</p>
                        <p className={styles.cardp2}>CROSSFIT</p>
                    </div>
                    <div className={`${styles.card} ${styles.card4}`} onClick={() => setSelectedProgram("cardio")}>
                        <p className={styles.cardp1}>SATURDAY 11:00AM</p>
                        <p className={styles.cardp2}>CARDIO</p>
                    </div>
                    <div className={`${styles.card} ${styles.card5}`} onClick={() => setSelectedProgram("legTraining")}>
                        <p className={styles.cardp1}>SUNDAY 21:00PM</p>
                        <p className={styles.cardp2}>LEG TRAINING</p>
                    </div>
                    <div className={`${styles.card} ${styles.card6}`}>
                        <p className={styles.cardp3}><Link href={"/about"}
                            style={{ textDecoration: "none", color: "white" }}>MORE PROGRAM</Link></p>
                    </div>
                </div>
                {selectedProgram && (
                    <>

                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                                backgroundColor: "rgba(0,0,0,0.6)",
                                zIndex: 998,
                            }}
                            onClick={() => setSelectedProgram(null)}
                        ></div>


                        <div
                            className={styles.info}
                            style={{
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: 999,
                            }}
                        >
                            <Information
                                title1={programs[selectedProgram].title1}
                                title2={programs[selectedProgram].title2}
                                onClose={() => setSelectedProgram(null)}
                            />
                        </div>
                    </>
                )}

            </div>
            <div className={styles.containerFour}>
                <h1 className={styles.h2}>BEST <span>TEAM</span></h1>
                <p className={styles.p4}>Theres nothing better than having your very own coach and mentor.
                    Need an extra push? They are ready!</p>
                <div className={styles.componentFour}>
                    <div className={styles.cardTwo}>
                        <img src="/Gym/images/trainer2.jpg" alt="" className={styles.img1} />
                        <h4>Domenic Snyder</h4>
                        <p>Body Builder Trainer</p>
                        <div className={styles.social}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.icon2} />
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon2} />
                            <FontAwesomeIcon icon={faTwitter} className={styles.icon2} />
                        </div>
                    </div>
                    <div className={styles.cardTwo}>
                        <img src="/Gym/images/trainer3.jpg" alt="" className={styles.img1} />
                        <h4>Virgil Cook</h4>
                        <p>Body Builer Trainer</p>
                        <div className={styles.social}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.icon2} />
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon2} />
                            <FontAwesomeIcon icon={faTwitter} className={styles.icon2} />
                        </div>
                    </div>
                    <div className={styles.cardTwo}>
                        <img src="/Gym/images/trainer4.png" alt="" className={styles.img1} />
                        <h4>Mate Adamia</h4>
                        <p>Personal Trainer</p>
                        <div className={styles.social}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.icon2} />
                            <FontAwesomeIcon icon={faInstagram} className={styles.icon2} />
                            <FontAwesomeIcon icon={faTwitter} className={styles.icon2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerFive}>
                <img src="/Gym/images/profile.jpg" alt="" />
                <h3>Jack Williams</h3>
                <h6>Body Builder Trainer</h6>
                <p>Great atmosphere and super helpful coaches! I used to go to the gym and do
                    the same thing all the time - weights, cardio and classes. I got bored
                    doing the same thing.
                </p>
            </div>
            <div className={styles.containerSix}>
                <h2>CONTACT <span>US</span></h2>
                <p>Fill in the form below to receive the hottest news and discounts information!</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text"
                            placeholder="NAME:"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="email"
                            placeholder="EMAIL:"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <input type="number"
                        placeholder="NUMBER:"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <textarea name="text"
                        placeholder="MESSAGE:"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <Button type="submit" title="SEND!" style={{ width: "10em", fontSize: "15px", padding: "12px" }} />
                </form>
            </div>
            <div className={styles.containerSeven}>
                <Footer />
            </div>
        </>
    )
} 