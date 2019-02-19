import * as React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import * as classes from '../../../styles/components/Order.css';

const checkoutSummary = (props: any) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div className={classes.CheckoutBurger}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled} >CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued} >CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;