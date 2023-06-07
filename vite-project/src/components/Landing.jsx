import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import HeroImg from "../assets/HeroImg.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="main-content-container">
        <div className="mini-container"></div>
        <div className="mini-container"></div>
        <div className="mini-container"></div>
      </div>
      <div className="invisible-container"></div>
    </>
  );
};

export default Landing;
