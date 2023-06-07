import "./Login.css";
import { useState, useEffect } from "react";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hiddenClass, setHiddenClass] = useState("hidden-container");
  useEffect(() => {
    return () => {
      if (isVisible === true) {
        console.log("visible");
        setHiddenClass("visible-container");
      }
    };
  }, [isVisible]);

  const hiddenHandler = () => {
    setIsVisible(true);
  };

  return (
    <div className="login-container">
      <h2>Metamask Connect</h2>
      <button className="proceedbtn">CONNECT</button>
      <div>
        <h2>VENDOR LOGIN</h2>
        <label>Enter Purchase ID</label>
        <input type="text" className="input" />
        <button onClick={hiddenHandler} className="proceedbtn">
          PROCEED
        </button>
        <div className="visible-container">
          <h5 className="h5">Is the recieved product intact ?</h5>
          <div className="btn-container">
            <button className="btnyn">Yes</button>
            <button className="btnyn">No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
