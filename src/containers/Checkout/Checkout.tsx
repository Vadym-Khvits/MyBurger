import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

interface StateFromProps {
    ingredients: string[];
}

class Checkout extends Component<StateFromProps & any, any> {

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
                    ingredients={this.props.ingredientsStack}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data/'}
                    component={ContactData}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any): StateFromProps => {
    return {
        ingredients: state.ingredientsStack
    }
};

export default connect(mapStateToProps)(Checkout);