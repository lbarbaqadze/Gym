'use client'
import styles from "./Header.module.css"

type Props = {
    title: string
    title2?: string
    bgImage?: React.CSSProperties
    style?: React.CSSProperties;
}

export default function Header(props: Props) {
    return (
        <div className={styles.container} style={props.bgImage}>
            <h1 style={props.style}>{props.title} <span>{props.title2}</span></h1>
        </div>
    )
}