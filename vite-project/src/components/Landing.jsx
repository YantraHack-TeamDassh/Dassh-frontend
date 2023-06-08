import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import HeroImg from "../assets/HeroImg.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="main-content-container">
        <div className="mini-container">
          <div className="emp-login">
            <h2>ORG LOGIN</h2>
            <form>
              <div className="emp-login-form">
                <div className="empId">
                  <label>Username</label>
                  <div className="inputDiv">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" name="empid"></input>
                  </div>
                </div>
                <div className="password">
                  <label>Password</label>
                  <div className="inputDiv">
                    <FontAwesomeIcon icon={faLock} />
                    <input type="password" name="emppassword"></input>
                  </div>
                </div>
                <div className="login-btn">
                  <button className="colorbtn">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mini-container">
          <div className="emp-login">
            <h2>VENDOR LOGIN</h2>
            <form>
              <div className="emp-login-form">
                <div className="empId">
                  <label>Vendor ID</label>
                  <div className="inputDiv">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" name="empid"></input>
                  </div>
                </div>
                <div className="password">
                  <label>Password</label>
                  <div className="inputDiv">
                    <FontAwesomeIcon icon={faLock} />
                    <input type="password" name="emppassword"></input>
                  </div>
                </div>
                <div className="login-btn">
                  <button className="colorbtn">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mini-container">
          <div className="emp-login">
            <h2>CUSTOMER LOGIN</h2>
            <form>
              <div className="emp-login-form">
                <div className="empId">
                  <label>Email ID</label>
                  <div className="inputDiv">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" name="empid"></input>
                  </div>
                </div>
                <div className="password">
                  <label>Password</label>
                  <div className="inputDiv">
                    <FontAwesomeIcon icon={faLock} />
                    <input type="password" name="emppassword"></input>
                  </div>
                </div>
                <div className="login-btn">
                  <button className="colorbtn">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="invisible-container"></div>
    </>
  );
};

export default Landing;
