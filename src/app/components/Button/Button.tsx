'use client';

import { useRouter } from "next/navigation";
import styles from "./Button.module.css";

type Props = {
  title: string;
  style?: React.CSSProperties;
  link?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({ title, style, link, type }: Props) {
  const router = useRouter();

  const handleClick = () => {
    if (link) router.push(link);
  };

  return (
    <button
      type={type}
      className={styles.buttonOne}
      style={style}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
}
