import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailref} />
        <input type="password" placeholder="Password" ref={passwordref} />
        <button className="signupScreen__button" onClick={signin}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
