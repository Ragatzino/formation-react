import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Accueil, Header,About,Topics,Menu} from 'Components'
export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Menu/>
        <Route exact path="/" component={Accueil} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/menu" component={Menu} />
      </div>
    </Router>
  );
}


