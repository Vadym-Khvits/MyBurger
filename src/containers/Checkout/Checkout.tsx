import * as React from 'react';
import { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

interface OwnStateProps {
    ingredients: string[];
    price: number;
}

class Checkout extends Component<OwnStateProps & any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ingredients: [],
            price: 0
        };
    };

    componentWillMount() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const ingredients = [] as string[];
        let price = 0;
        searchParams.forEach ((value: string, key: string) => {
            if (key === 'price') {
                price = +value;
            } else {
                ingredients.push(key);
                console.log(key);
            }            
        });
        this.setState({ 
            ingredients: [...ingredients],
            price
         });
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
                <Route
                    path={this.props.match.path + '/contact-data/'}
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)}
                />
            </div>
        );
    }
}

export default Checkout;