'use client'
import styles from "./Navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";

type Props = {
    bgColor?: string;
}

export default function Navbar({bgColor}: Props){

    return(
        <div className={styles.container} style={{backgroundColor: bgColor}}>
            <div className={styles.componentOne}>
                <p><FontAwesomeIcon icon={faCreditCard} /></p>
                <p>4578 Marmora Road</p>
            </div>
            <div className={styles.componentOne}>
                <p><FontAwesomeIcon icon={faClock} /></p>
                <p>Mon - Fri: 9:00AM - 5:00PM   |   Sat - Sun: Closed</p>
            </div>
            <div className={styles.componentOne}>
                <p><FontAwesomeIcon icon={faPhone} /></p>
                <p>+91 543 534 5341</p>
            </div>
        </div>
    )


}