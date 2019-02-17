import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

interface StateFromProps {
    ingredientsStack: string[];
    purchased: boolean;
}

class Checkout extends Component<StateFromProps & any, any> {
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        const { ingredientsStack } = this.props;
        let summary = <Redirect to="/" />
        if (ingredientsStack && ingredientsStack.length > 0) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
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
        return summary;
    }
}

const mapStateToProps = (state: any): StateFromProps => {
    return {
        ingredientsStack: state.burgerBuilder.ingredientsStack,
        purchased: state.order.purchased
    }
};

export default connect(mapStateToProps)(Checkout);