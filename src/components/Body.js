import React from "react";
import '../components/styles/Navbar.css'

function Body({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
        <a
          href="#About"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
        <a
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
    </ul>
  );
}

export default Body;