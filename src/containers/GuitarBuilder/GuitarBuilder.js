import React, { Component, Fragment } from "react";
import Guitar from '../../components/Guitar/Guitar';
import BuildControls from '../../components/Guitar/BuildControls/BuildControls';

class GuitarBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: {
        lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Guitar parts={this.state.parts} />
        <BuildControls />
      </Fragment>
    );
  }
}

export default GuitarBuilder;
