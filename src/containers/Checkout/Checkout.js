import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    parts: {
      lettuce: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }
  render() {
    return (
      <div>
        <CheckoutSummary parts={this.state.parts} />
      </div>
    )
  }
}

export default Checkout;