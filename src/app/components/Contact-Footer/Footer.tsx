'use client'
import styles from "./Footer.module.css"
import Button from "../Button/Button"

type Props = {
    title1: string,
    title2: string
    style?: React.CSSProperties
}


export default function Footer2(props: Props) {

    return (
        <div className={styles.container} style={props.style}>
            <div>
                <h2>{props.title1}</h2>
                <p>{props.title2}</p>
            </div>
            <Button title="Get In Touch" link="/contact" style={{ width: "13em", fontSize: "18px" }} />
        </div>
    )

}