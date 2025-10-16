'use client'
import Link from "next/link";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

type Props = {
    bgColor?: string;
}

export default function Navbar2({bgColor}: Props) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <nav className={`navbar ${styles.container}`} style={{backgroundColor: bgColor}}>
        <div className={`container-fluid ${styles.containerFluid}`}>
          <a className={`navbar-brand ${styles.logo}`} href="#">CROSS<span>ARENA</span></a>
          <div className={styles.menu}>
            <ul>
              <li><Link className={styles.link} href="/">Home</Link></li>
              <li><Link className={styles.link} href="/about">About</Link></li>
              <li><Link className={styles.link} href="/services">Services</Link></li>
              <li><Link className={styles.link} href="/team">Team</Link></li>
              <li><Link className={styles.link} href="/contact">Contact</Link></li>
            </ul>
          </div>
          <button
            className={`navbar-toggler ${styles.menuicon}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className={`${styles.icon}`}><FontAwesomeIcon icon={faBars} /></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className={`offcanvas-title ${styles.h5}`}id="offcanvasNavbarLabel">CROSS<span>ARENA</span></h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className={`offcanvas-body ${styles.sidebar}`}>
              <ul className={`navbar-nav justify-content-center flex-grow-1 pe-3 ${styles.sidebar2}`}>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.link2}`} aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.link2}`} href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.link2}`} href="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.link2}`} href="/team">Team</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${styles.link2}`} href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

