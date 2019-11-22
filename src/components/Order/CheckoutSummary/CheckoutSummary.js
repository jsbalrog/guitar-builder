import React from 'react';
import Guitar from '../../Guitar/Guitar';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
 return (
   <div className={classes.CheckoutSummary}>
     <h1>We hope it tastes good!</h1>
     <div style={{width: '100%', margin: 'auto'}}>
        <Guitar parts={props.parts} />
     </div>
     <Button clicked={props.checkoutCancelled} btnType="Danger">CANCEL</Button>
     <Button clicked={props.checkoutContinued} btnType="Success">CONTINUE</Button>
   </div>
 )
}

export default checkoutSummary;
