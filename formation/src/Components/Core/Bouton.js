import React from "react";
import { bindExpression, tsConstructorType } from "@babel/types";

class Bouton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compteur: 0 };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    this.setState({ compteur: this.state.compteur + 1 });
  }
  render() {
    return <button onClick={this.onClickButton}>{this.state.compteur}</button>;
  }
}
export default Bouton;
