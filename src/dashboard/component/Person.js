import React, { Component } from "react";

import Aux from "../hoc/Auxs";
import withClass from "../hoc/WithComponent";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      //   <withClass>
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.nam} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      //   </withClass>
    );
  }
}

export default withClass(Person, classes.Person);
