import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* <h4>Developed by Vijay Anand</h4>
      <h4>Copyright &copy; {new Date().getFullYear()} VJ</h4> */}
      <div className="footerLinks">
        <a
          href="https://github.com/vijayanand1505"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>{" "}
        &nbsp; &nbsp;
        <a
          href="www.linkedin.com/in/vijay-anand-b14bb6230"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>{" "}
        &nbsp; &nbsp;
        <a
          href="https://vijayanandthangavel.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe />
        </a>{" "}
        &nbsp; &nbsp;
        <a
          href="mailTo:tvijayanandkkp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrMail />
        </a>{" "}
        &nbsp; &nbsp;
        <a
          href="https://instagram.com/_.vijiii._?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
