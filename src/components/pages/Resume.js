import React from "react";
import Pdf from "../../../src/Christa_Baccas_Resume_Developer.pdf";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="front-end">
        <h3>Front-End Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="back-end">
        <h3>Back-End Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequalize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div className='resume-container>'>
      <a
        href={Pdf}
        without
        rel="noopener noreferrer"
        target="_blank"
        className="resume-btn"
      >
        <button label="Resume" className="btn">
          Download Resume
        </button>
      </a>
      </div>
    </div>
  );
}
