import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";

function Footer() {
  const { currentPage, setPage } = useAppContext();

  const handleClick = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  };

  return (
    <div className="footer-container">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="logo-wrapper"
      >
        <h1>Élicieux</h1>
        <h2>RESTAURANT</h2>
      </div>
      <ul>
        <li>
          <Link
            style={{ color: currentPage === "home" && "#a97959" }}
            onClick={() => handleClick("home")}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{ color: currentPage === "menu" && "#a97959" }}
            onClick={() => handleClick("menu")}
            to="/menu"
          >
            Our Menu
          </Link>
        </li>
        <li>
          <Link
            style={{ color: currentPage === "history" && "#a97959" }}
            onClick={() => handleClick("history")}
            to="/history"
          >
            History
          </Link>
        </li>
        <li>
          <Link
            style={{ color: currentPage === "contact" && "#a97959" }}
            onClick={() => handleClick("contact")}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="social-media-icons">
        <a href="https://www.facebook.com/">
          <FaFacebook className="facebook-icon" />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram className="instagram-icon" />
        </a>
        <a href="https://www.twitter.com/">
          <FaTwitter className="twitter-icon" />
        </a>
      </div>
      <div className="copyright-container">
        <small>
          Copyright © 2024 Élicieux Restaurant <br /> by Sebastian Torkowski
        </small>
      </div>
    </div>
  );
}

export default Footer;
