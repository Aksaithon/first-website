import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;
      li {
        list-style: none;
        .navbar-links {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      .close-outline {
        display: none;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: index;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 1;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      /* hide the original nav menu  */

      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(100%);

        li {
          &.navbar-links {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }
            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2re;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 1;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 1;
      }
    }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-links"
              to="/"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-links"
              to="/about"
              onClick={() => setOpenMenu(false)}
            >
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className="navbar-links"
              to="/services"
              onClick={() => setOpenMenu(false)}
            >
              Services
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className="navbar-links"
              to="/contact"
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* nav-icon */}
        <div className="mobile-navbar-btn">
          <CgMenuRight
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgClose
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
