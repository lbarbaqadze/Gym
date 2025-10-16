'use client'

import { useEffect } from "react";
import styles from "./Slider.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Slider() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={styles.container}>
      <div id="carouselExampleDark" className="carousel carousel-light slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/Gym/images/about-images/gym.jpg"
              className={`d-block ${styles.sliderImg}`}
              alt="..."
            />
            <div className="carousel-caption">
              <h5 className={styles.h5}>CROSS <span>ARENA</span></h5>
              <p className={styles.p}>Train with the best coaches!</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/Gym/images/about-images/gym2.jpg"
              className={`d-block ${styles.sliderImg}`}
              alt="..."
            />
            <div className="carousel-caption">
              <h5 className={styles.h5}>CROSS <span>ARENA</span></h5>
              <p className={styles.p}>Get the best gym experience!</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/Gym/images/about-images/gym3.jpg"
              className={`d-block ${styles.sliderImg}`}
              alt="..."
            />
            <div className="carousel-caption">
              <h5 className={styles.h5}>CROSS <span>ARENA</span></h5>
              <p className={styles.p}>Achieve your fitness goals!</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/Gym/images/about-images/gym4.jpg"
              className={`d-block ${styles.sliderImg}`}
              alt="..."
            />
            <div className="carousel-caption">
              <h5 className={styles.h5}>CROSS <span>ARENA</span></h5>
              <p className={styles.p}>Stay strong, stay healthy!"</p>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
