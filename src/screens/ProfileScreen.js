import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://thumbs.dreamstime.com/b/cute-monster-face-square-avatar-vector-stock-cute-monster-face-square-avatar-114650081.jpg"
            alt="Avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>

              <button
                className="profileScreen__signout"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
            {/* <form></form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;