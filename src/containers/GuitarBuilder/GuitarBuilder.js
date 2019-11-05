import React, { Component, Fragment } from "react";
import axios from '../../axios-orders';

import Guitar from '../../components/Guitar/Guitar';
import BuildControls from '../../components/Guitar/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Guitar/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

const PART_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class GuitarBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: {
        lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchaseable: false,
      purchasing: false,
      loading: false,
    }
  }

  updatePurchaseState = (parts) => {
    const sum = Object.keys(parts)
      .map(pKey => {
        return parts[pKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchaseable: sum > 0})
  };

  addPartHandler = (type) => {
    // Update the parts
    const oldCount = this.state.parts[type];
    if(oldCount >= 3) {
      return;
    }
    const updatedCount = oldCount + 1;
    const updatedParts = {
      ...this.state.parts
    };
    updatedParts[type] = updatedCount;

    // Update the price
    const priceAddition = PART_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;

    // Set the state with the new parts and new price
    this.setState({parts: updatedParts, totalPrice: updatedPrice});

    this.updatePurchaseState(updatedParts);
  };

  removePartHandler = (type) => {
    // Update the parts
    const oldCount = this.state.parts[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedParts = {
      ...this.state.parts
    };
    updatedParts[type] = updatedCount;

    // Update the price
    const priceDeduction = PART_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - priceDeduction;

    // Set the state with the new parts and new price
    this.setState({parts: updatedParts, totalPrice: updatedPrice});

    this.updatePurchaseState(updatedParts);
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchasedCancelHandler = () => {
    this.setState({purchasing: false}); // This will hide the modal
  };

  purchaseContinueHandler = () => {
    this.setState({loading: true});

    const order = {
      parts: this.state.parts,
      price: this.state.totalPrice,
      customer: {
        name: 'Max Schwarz',
        address: {
          street: 'Teststreet 1',
          zipCode: 12345,
          country: 'Germany',
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest',
    };
    axios.post('/orders.json', order)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error))
      .finally(response => {
        this.setState({loading: false, purchasing: false});
      })
  };

  render() {
    const disabledInfo = {
      ...this.state.parts
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = <OrderSummary
      purchaseCanceled={this.purchasedCancelHandler}
      purchaseContinued={this.purchaseContinueHandler}
      parts={this.state.parts}
      price={this.state.totalPrice} 
    />
    if(this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchasedCancelHandler}>
          {orderSummary}
        </Modal>
        <Guitar parts={this.state.parts} />
        <BuildControls
          partAdded={this.addPartHandler}
          partRemoved={this.removePartHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}
        />
      </Fragment>
    );
  }
}

export default GuitarBuilder;
