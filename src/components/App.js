import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "../components/Home";
import About from "./About"; // Corrected import path

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
