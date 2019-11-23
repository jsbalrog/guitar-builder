import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';


class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault(); // prevent sending a request on the form.
    console.log(this.props.parts);

    //this.setState({loading: true});

    const order = {
     parts: this.props.parts,
     price: this.props.price,
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
      this.setState({loading: false});
      this.props.history.push('/');
     })
     .catch(error => console.log(error))
     .finally(response => {
       this.setState({loading: false});
     })

  }

  render() {
    let form = (<form>
      <input className={classes.Input} type="text" name="name" placeholder="Your name" />
      <input className={classes.Input} type="text" name="email" placeholder="Your email" />
      <input className={classes.Input} type="text" name="street" placeholder="Your street" />
      <input className={classes.Input} type="text" name="postal" placeholder="Your postal code" />
      <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>);
    if(this.state.loading) {
      form = <Spinner />;
    }
    return(
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}
export default ContactData;