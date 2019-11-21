import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './GuitarPart.module.css';

class GuitarPart extends Component {
  part = null;

  render() {
    switch (this.props.type) {
      case ('bread-bottom'):
        this.part = <div className={classes.BreadBottom}> </div>;
        break;
      case('bread-top'):
        this.part = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case('meat'):
        this.part = <div className={classes.Meat}></div>;
        break;
      case('cheese'):
        this.part = <div className={classes.Cheese}></div>;
        break;
      case('lettuce'):
        this.part = <div className={classes.Lettuce}></div>;
        break;
      case('bacon'):
        this.part = <div className={classes.Bacon}></div>;
        break;
      default:
        this.part = null;
        break;
    }

    return this.part;
  }
}

GuitarPart.propTypes = {
  type: PropTypes.string.isRequired
}

export default GuitarPart;