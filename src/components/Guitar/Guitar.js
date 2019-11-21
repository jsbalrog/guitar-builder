import React from 'react';

import classes from './Guitar.module.css';
import GuitarPart from './GuitarPart/GuitarPart'

const guitar = (props) => {
  /*
   *  Given an object like this: { "foo": 2, "bar": 1, "baz": 3},
   *  return an array ["foo", "foo", "bar", "baz", "baz", "baz"]
   */
  let transformedParts = Object.keys(props.parts)
    .map(pKey => {
      return [...Array(props.parts[pKey])].map((_, i) => {
        return <GuitarPart key={pKey + i} type={pKey} />;
      });
    }).reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if(transformedParts.length === 0) {
    transformedParts = <p>Please start adding parts!</p>
  }

  return (
    <div className={classes.Guitar}>
      <GuitarPart type="bread-top" />
      {transformedParts}
      <GuitarPart type="bread-bottom" />
    </div>
  );
}

export default guitar;
