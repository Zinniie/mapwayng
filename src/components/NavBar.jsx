import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styled from "styled-components";
import { color } from "../constant/color";
import { Link } from "react-router-dom";
import Landing from "./Landing";
import MapWayLogo from "../assets/png/mapway_logo.png";
import Demo from '../assets/png/techcrunch.png';


function NavBar() {
  const [showNavItems, setShowNavItems] = useState(true);
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowNavItems(window.innerWidth > 768);
    };

    // Add event listener to update the showNavItems state on window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavDrawer = () => {
    setShowNavDrawer(!showNavDrawer);
  };

  const closeNavDrawer = () => {
    setShowNavDrawer(false);
  };

  return (
    <div>
      <div>
        <nav
          className="navbar bg-white fixed-top top-nav px-5 d-flex align-items-center justify-content-between"
          style={{
            color: color.deepgrey,
            fontSize: "15px",
            height: showNavItems ? "65px" : "50px",
            // Set the height based on showNavItems
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <NavBrand className="nav__brand  d-flex align-items-center justify-content-between ">
              <div className="brand-cover   d-flex align-items-center">
                <div
                  className="brand-icon d-flex text-white px-2 fw-bold shadow-sm rounded-2 mx-2 align-items-center justify-content-center"
                  style={{
                    background: color.primary,
                  }}
                >
                  M
                </div>
                {/* <img src={MapWayLogo} alt="MapWayLogo" /> */}
                <div className="brand-name fw-bold  mx-1 ">MapWay</div>
              </div>
            </NavBrand>
          </Link>

          {/* Nav drawer button */}
          {!showNavItems && (
            <NavDrawerButton onClick={toggleNavDrawer}>&#9776;</NavDrawerButton>
          )}

          {/* Render nav-categories and nav-auth only for larger screens */}
          {showNavItems && (
            <>
              <Categories className="nav-categories d-flex align-items-center justify-content-between">
                <Link to="/about-us">
                  <div className="mx-4">About Us</div>
                </Link>
                <Link to="/our-projects">
                  <div className="mx-4">
                    Our Projects <RiArrowDropDownLine size={30} />
                  </div>
                </Link>
                <Link to="/resources">
                  <div className="mx-4">
                    Resources <RiArrowDropDownLine size={30} />
                  </div>
                </Link>
                <Link to="/contact-us">
                  <div className="mx-2">Contact Us</div>
                </Link>
              </Categories>
              <AuthContainer className="nav-auth d-flex align-items-center justify-content-between">
                <IconContainer>
                  <Link
                    to="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon>
                      <FaFacebookF />
                    </Icon>
                  </Link>
                </IconContainer>
                <IconContainer>
                  <Link
                    to="https://www.instagram.com/mapwayng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon>
                      <FaInstagram />
                    </Icon>
                  </Link>
                </IconContainer>
                <IconContainer>
                  <Link
                    to="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon>
                      <FaLinkedin />
                    </Icon>
                  </Link>
                </IconContainer>
                <IconContainer>
                  <Link
                    to="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon>
                      <FaTwitter />
                    </Icon>
                  </Link>
                </IconContainer>
                <IconContainer>
                  <Link
                    to="https://www.youtube.com/@OlamideEniolaPeters"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon>
                      <FaYoutube />
                    </Icon>
                  </Link>
                </IconContainer>
                {/* <div className="login mx-2" type="button">
                  Log in
                </div>
                <div
                  className="sign-up mx-2 shadow-lg py-2 px-3 rounded-3 text-white"
                  type="button"
                  style={{
                    background: color.primary,
                  }}
                >
                  Sign up
                </div> */}
              </AuthContainer>
            </>
          )}
          {/* Nav drawer button */}
          {!showNavItems && (
            <>
              <NavDrawerButton onClick={toggleNavDrawer}>
                &#9776;
              </NavDrawerButton>
              {showNavDrawer && (
                <CloseButton onClick={closeNavDrawer}>&#10006;</CloseButton>
              )}
            </>
          )}
        </nav>
        {/* Nav drawer content */}
        {showNavDrawer && !showNavItems && (
          <NavDrawer show={showNavDrawer}>
            {/* Close button */}
            <CloseButton
              className="nav__drawer-close-button"
              onClick={closeNavDrawer}
            >
              &#10006;
            </CloseButton>
            <div className="nav__drawer-item " onClick={closeNavDrawer}>
              <Link
                to="/about-us"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="mx-4 mt-4">About Us</div>
              </Link>
            </div>
            <div className="nav__drawer-item" onClick={closeNavDrawer}>
              <Link
                to="/our-projects"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="mx-4">
                  Our Projects <RiArrowDropDownLine size={30} />
                </div>
              </Link>
            </div>
            <div className="nav__drawer-item" onClick={closeNavDrawer}>
              <Link
                to="/resources"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="mx-4">
                  Resources <RiArrowDropDownLine size={30} />
                </div>
              </Link>
            </div>
            <div className="nav__drawer-item" onClick={closeNavDrawer}>
              <Link
                to="/contact-us"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="mx-4">Contact Us</div>
              </Link>
            </div>

            <div className="d-flex mt-5">
              {" "}
              <IconContainer>
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>
                    <FaFacebookF />
                  </Icon>
                </Link>
              </IconContainer>
              <IconContainer>
                <Link
                  to="https://www.instagram.com/mapwayng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>
                    <FaInstagram />
                  </Icon>
                </Link>
              </IconContainer>
              <IconContainer>
                <Link
                  to="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>
                    <FaLinkedin />
                  </Icon>
                </Link>
              </IconContainer>
              <IconContainer>
                <Link
                  to="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>
                    <FaTwitter />
                  </Icon>
                </Link>
              </IconContainer>
              <IconContainer>
                <Link
                  to="https://www.youtube.com/@OlamideEniolaPeters"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>
                    <FaYoutube />
                  </Icon>
                </Link>
              </IconContainer>
            </div>
            {/* <div className="nav__drawer-item login" onClick={closeNavDrawer}>
              Log in
            </div>
            <div
              className="nav__drawer-item sign-up shadow-lg py-2 px-3 rounded-3 text-white"
              onClick={closeNavDrawer}
            >
              Sign up
            </div> */}
          </NavDrawer>
        )}
      </div>
    </div>
  );
}

// Use styled-components to create a styled div for the Categories
const Categories = styled.div`
  margin-right: 50px;
  a {
    text-decoration: none; /* Remove underline */
    color: #000; /* Set the desired color for the links */
  }
`;

// Use styled-components to create a styled div for the authentication elements
const AuthContainer = styled.div``;

const IconContainer = styled.div`margin-left: 20px;`;
const Icon = styled.div`
  color: black; 
`;

const NavBrand = styled.div`
  a {
    text-decoration: none; /* Remove underline */
    color: #000; /* Set the desired color for the links */
  }
`;

// Use styled-components to create a styled button for the nav drawer
const NavDrawerButton = styled.button`
  position: absolute;
  top: 0;
  right: 40px; /* Set the position to the right */
  // left: 0;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: black;

  /* Add a media query to hide the button on larger screens */
  @media (min-width: 769px) {
    .nav__drawer-close-button {
      display: none;
    }
  }
`;

// Use styled-components to create a styled div for the 'X' close button
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 20px; /* Set the position to the right */
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

// Use styled-components to create a styled div for the nav drawer
const NavDrawer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ show }) => (show ? "0" : "-200px")};
  width: 250px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: right 0.3s ease;
  height: 100vh;
  // height: calc(100vh - 65px); /* Adjust height to fit the screen */
  z-index: 9999; /* Set a high z-index value to ensure the drawer appears on top */

  .nav__drawer-item {
    padding: 10px;
    cursor: pointer;
  }

  .login {
    color: ${color.deepgrey};
  }

  .sign-up {
    background: ${color.primary};
  }
`;

export default NavBar;
