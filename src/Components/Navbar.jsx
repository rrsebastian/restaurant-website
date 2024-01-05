import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";
import { MdMenuBook } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Navbar({ bookATableRef }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { currentPage, setPage } = useAppContext();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToBookATable = () => {
    bookATableRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar-container">
      <div className="hamburger-icon-close-container">
        <button
          className="hamburger-icon-close-btn"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <IoMdClose className="hamburger-close-icon" />
          ) : (
            <GiHamburgerMenu className="hamburger-close-icon" />
          )}
        </button>
      </div>
      <div
        className={
          showMobileMenu ? "show-list-container" : "hide-list-container"
        }
      >
        <ul style={{ display: windowSize < 1080 }} className="list-items">
          <Link to="/">
            <li
              onClick={() => setPage("home")}
              style={{ color: currentPage === "home" && "#a97959" }}
            >
              HOME
            </li>
          </Link>
          <Link to="/menu">
            <li
              onClick={() => setPage("menu")}
              style={{ color: currentPage === "menu" && "#a97959" }}
            >
              OUR MENU
            </li>
          </Link>
          <Link to="/history">
            <li
              onClick={() => setPage("history")}
              style={{ color: currentPage === "history" && "#a97959" }}
            >
              HISTORY
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={() => setPage("contact")}
              style={{ color: currentPage === "contact" && "#a97959" }}
            >
              CONTACT
            </li>
          </Link>
        </ul>
      </div>

      <div className="logo-wrapper">
        <h1>Élicieux</h1>
        <h2>RESTAURANT</h2>
      </div>
      <div
        style={{ display: currentPage === "contact" && "none" }}
        className="reservation-btn-container"
      >
        <button
          onClick={scrollToBookATable}
          className={windowSize >= 1080 ? "reservation-btn" : "reservation-img"}
        >
          {windowSize >= 1080 ? (
            "MAKE A RESERVATION"
          ) : (
            <MdMenuBook className="menu-book-img" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
