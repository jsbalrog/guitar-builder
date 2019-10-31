import React, {Fragment} from 'react';

import Button from '../../UI/Button/Button';

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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCanceled} btnType={"Danger"}>CANCEL</Button>
      <Button clicked={props.purchaseContinued} btnType={"Success"}>CONTINUE</Button>
    </Fragment>
  )
}

export default orderSummary;
 