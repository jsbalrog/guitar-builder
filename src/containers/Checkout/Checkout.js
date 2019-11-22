import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    parts: {
      lettuce: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }

  componentDidMount() {
    // Due to routing in App.js, location is on the props automatically
    const query = new URLSearchParams(this.props.location.search);
    const parts = {};
    for(let param of query.entries()) {
      parts[param[0]] = +param[1]
    }
    this.setState({parts: parts});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }
  render() {
    return (
      <div>
        <CheckoutSummary
          parts={this.state.parts}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
      </div>
    )
  }
}

export default Checkout;
