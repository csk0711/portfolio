import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import "../styles/Home.css";

function Home() {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Graduate Student"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 80,
  });

  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Suchit kumar</h2>
        <div className="prompt">
          <p>
            A {text}
            <Cursor />
            with a passion for learning and creating.
          </p>
          <a
            href="https://www.linkedin.com/in/suchit-kumar-b27616169/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a href="mailto:suchitkumar@fullstackdev.co.in ">
            <EmailIcon />
          </a>

          <a
            href="https://github.com/suchitkumarchennuri"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, GraphQL, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C++ </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
