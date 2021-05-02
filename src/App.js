import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const user = {
    name: "raj",
  };
  return (
    <div className="app">
      <Router>
        {user ? (
          <Route>
            <LoginScreen />
          </Route>
        ) : (
          <Route path="/">
            <HomeScreen />
          </Route>
        )}
      </Router>
    </div>
  );
}

export default App;
