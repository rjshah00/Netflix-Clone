import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-logo"
          className="nav__logo"
          onClick={() => history.push("/")}
        />

        <img
          src="https://thumbs.dreamstime.com/b/cute-monster-face-square-avatar-vector-stock-cute-monster-face-square-avatar-114650081.jpg"
          alt="Avatar"
          className="nav__avatar "
          onClick={() => history.push("/profile")}
        />
      </div>
    </div>
  );
}

export default Nav;
