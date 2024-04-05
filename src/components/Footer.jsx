import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started</h3>
            <h3>Talk to Us Today</h3>
          </div>
          <div className="contact-short-btn">
            <NavLink to={"/"}>
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>AKSAITHON</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              minus.
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get Important Updates</h3>
            <form action="#">
              <input
                type="email"
                placeholder="email"
                required
                autoComplete="off"
              />
              <Button type="submit" >
              Subscribe
                {/* <input type="submit" value="Subscribe" /> */}
              </Button>
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social-icons">
              <a href="#">
                <div>
                  <FaDiscord className="icons" />
                </div>
              </a>

              <a href="https://www.instagram.com/dr._abhishek_sharma_pt/">
                <div>
                  <FaInstagram className="icons" />
                </div>
              </a>

              <a href="https://www.youtube.com/channel/UChPWc6lp5Bh0IwBzH9KzFjg">
                <div>
                  <FaYoutube className="icons" />
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 9910493563</h3>
            </div>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} AKSAITHON. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`

form{
  display: flex;
  flex-direction: column;

  gap: 5px;
}

input[type = 'submit']{
  padding: 0px;
  margin: 0px;
}
  .contact-short {
    max-width: 85vw;
    margin: auto;
    padding: 3rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(70%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: centre;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social-icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 5rem;

      hr {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 50%;
    }
    .contact-short {
      padding: 2rem 0rem;
      display: grid;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: start;
      }
    }

    .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
