import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Button } from "../styles/Button";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const { brand, name, image } = useGlobalContext();

  //   const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">
            <h3>THIS IS</h3>
          </p>
          <h1 className="hero-heading">{brand}</h1>
          <p className={`${styles.para} hero-para`}>
            A Front-end developer specializing in 3D, Typescript, and the Web.
            <ul className={styles.tools}>
              <li className={styles.tech}>React</li>
              <li className={styles.tech}>Javascript</li>
              <li className={styles.tech}>Typescript</li>
              <li className={styles.tech}>Spring</li>
              <li className={styles.tech}>Gesture</li>
              <li className={styles.tech}>GitHub</li>
              <li className={styles.tech}>Figma</li>
            </ul>
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
