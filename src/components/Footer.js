import React from "react";
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'
import './styles/Footer.css'

function Footer() {

  const myInfo = {
    github: `https://github.com/christa-baccas`,
    linkedin:`https://www.linkedin.com/in/christa-baccas-77362a205/`,
    stackOverflow: `https://stackoverflow.com/users/16735523/christa`,
  }

  return (
    <footer className="footer">
        <a href={myInfo.github}without rel="noopener noreferrer" target="_blank" ><FaGithubSquare /></a>
        <a href={myInfo.linkedin} without rel="noopener noreferrer" target="_blank" ><FaLinkedin /></a>
        <a href={myInfo.stackOverflow} without rel="noopener noreferrer" target="_blank" ><FaStackOverflow /></a>
    </footer>
  );
}

export default Footer;