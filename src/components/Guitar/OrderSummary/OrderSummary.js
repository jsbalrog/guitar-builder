import React, {Fragment} from 'react';

const orderSummary = (props) => {
  const partSummary = Object.keys(props.parts)
    .map(pKey => {
      return (
        <li key={pKey}>
          <span style={{textTransform: "capitalize"}}>{pKey}</span>: {props.parts[pKey]}
        </li>);
    });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {partSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Fragment>
  )
}

export default orderSummary;
