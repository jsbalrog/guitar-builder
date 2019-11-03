import React, {Component, Fragment} from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  UNSAFE_componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }
  
  render() {
    const partSummary = Object.keys(this.props.parts)
    .map(pKey => {
      return (
        <li key={pKey}>
          <span style={{textTransform: "capitalize"}}>{pKey}</span>: {this.props.parts[pKey]}
        </li>);
    });
    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {partSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCanceled} btnType={"Danger"}>CANCEL</Button>
        <Button clicked={this.props.purchaseContinued} btnType={"Success"}>CONTINUE</Button>
      </Fragment>
    )
  }
}

export default OrderSummary;
 