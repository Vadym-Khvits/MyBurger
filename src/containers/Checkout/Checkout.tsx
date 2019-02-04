import * as React from 'react';
import { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

interface OwnStateProps {
    ingredients: string[];
}

class Checkout extends Component<OwnStateProps & any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ingredients: []
        };
    };

    componentDidMount() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const ingredients = [] as string[];
        searchParams.forEach ((value: string, key: string) => {
            ingredients.push(key);
            console.log(key);
        });
        this.setState({ ingredients: [...ingredients] });
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
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
            </div>
        );
    }
}

export default Checkout;