import React, { Component, Fragment } from "react";
import Guitar from '../../components/Guitar/Guitar';

class GuitarBuilder extends Component {
  render() {
    return (
      <Fragment>
        <Guitar />
        <div>Build controls</div>
      </Fragment>
    );
  }
}

export default GuitarBuilder;
