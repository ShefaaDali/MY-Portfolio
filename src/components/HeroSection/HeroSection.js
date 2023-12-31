import "./HeroSection.css";
import computer from "./../../images/Hero-Image.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import HTML from "./../../images/html-5.png";
import Css from "./../../images/css-3.png";
import JS from "./../../images/js.png";
import ReactJs from "./../../images/react.png";
import NodeJs from "./../../images/icons8-nodejs-48.png";
import Express from "./../../images/icons8-express-js-50.png";
import Git from "./../../images/icons8-git-48.png";
import Java from "./../../images/java.png";
import Sql from "./../../images/database.png";
import Bootstrap from "./../../images/icons8-bootstrap-48.png"
import { useEffect, useState } from "react";

const TITLES = [
  "a Computer Engineer",
  "a web Developer",
  "an enthusiastic learner",
];
  
function HeroSection() {
  
  const [titleIndex,setTitleIndex] = useState(0);
  const [fadeIn,setFadeIn] = useState(true);
  
  useEffect(()=>{
    let titleInterval=null;
    let timeout=null;

     titleInterval = setInterval(() => {
      setTitleIndex((titleIndex + 1)% TITLES.length);
      setFadeIn(true);
    }, 4000);

    timeout = setTimeout(()=> {
      setFadeIn(false);
    }, 2000);

  return ()=>{
    clearInterval(titleInterval);
    clearTimeout(timeout);
  };
  },[titleIndex]);

  return (
    <div
      className="hero-section container-fluid d-sm-flex pt-5 justify-content-center align-items-center mt-5"
      id="Home"
    >
      <div className="hero-content pt-5 ">
        <p className="text-center fs-1">
          Hi, I'm <br></br>
          <span className="fw-bold my-name">Shefaa Dali </span>
          <br></br>& I'm <span className={ fadeIn ? "title-fade-in" : "title-fade-out"} > {TITLES[titleIndex]}</span>
        </p>
        <div className="linkes m-auto">
          <a href="https://www.linkedin.com/in/shefaadali/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon mx-2" />
          </a>
          <a href="https://github.com/ShefaaDali" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="github-icon mx-2"
            />
          </a> 
          <a href="mailto:shefaadali@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="email-icon mx-2" />
          </a>
        </div>
        <div className="skills my-5 mx-2">
          <img src={HTML} alt="HTML" className="html-icon " />
          <img src={Css} alt="CSS" className="css-icon" />
          <img src={JS} alt="JS" className="js-icon" />
          <img src={ReactJs} alt="React.js" className="reactjs-icon" />
          <img src={NodeJs} alt="Node.js" className="nodejs-icon" />
          <img src={Express} alt="Express" className="express-icon" />
          <img src={Git} alt="Git" className="git-icon" />
          <img src={Sql} alt="SQL" className="sql-icon" />
          <img src={Java} alt="JAVA" className="java-icon" />
          <img src={Bootstrap} alt="Bootstrap" className="Bootstrap-icon" />
        </div>
      </div>
      <div className="nero-image">
        <img
          src={computer}
          alt=""
          className="Computer-image img-fluid w-60 d-none d-md-block "
        />
      </div>
    </div>
  );
}

export default HeroSection;
