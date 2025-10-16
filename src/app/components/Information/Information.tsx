'use client'
import styles from "./Information.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
    title1: string,
    title2: string,
    onClose?: () => void
}

export default function Information({ title1, title2, onClose }: Props) {


    return (
        <div className={styles.information}>
            <FontAwesomeIcon
                icon={faXmark}
                className={styles.icon}
                onClick={() => {
                    onClose?.();
                }}
            />
            <h1>INFORMATION</h1>
            <h2>{title1}</h2>
            <p>{title2}</p>
        </div>
    )

}