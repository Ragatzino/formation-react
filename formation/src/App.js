import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import { makeStyles } from "@material-ui/core/styles";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Menu />
      </div>
    </Router>
  );
}
