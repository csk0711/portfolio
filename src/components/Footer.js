import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.instagram.com/csk200011/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/Suchit31376"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.facebook.com/csk200011/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/suchit-kumar-b27616169/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 fullstackdev.co.in </p>
    </div>
  );
}

export default Footer;
