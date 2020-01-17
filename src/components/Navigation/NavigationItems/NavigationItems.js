import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>Guitar Builder</NavigationItem>
      <NavigationItem link="/checkout">Checkout</NavigationItem>
      <NavigationItem link="/party">Party</NavigationItem>
    </ul>
  );
}

export default navigationItems;
