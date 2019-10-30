import React from 'react';

import classes from './Guitar.module.css';
import GuitarPart from './GuitarPart/GuitarPart'

const guitar = (props) => {
  return (
    <div className={classes.Burger}>
      <GuitarPart type="bread-top" />
      <GuitarPart type="cheese" />
      <GuitarPart type="meat" />
      <GuitarPart type="bread-bottom" />
    </div>
  );
}

export default guitar;
