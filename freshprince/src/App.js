import React from "react";
import Jumbotron from "./components/Jumbo";
import Container from "./components/Container";
import "./App.css";

const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <Container />
  </div>
);

export default App;
