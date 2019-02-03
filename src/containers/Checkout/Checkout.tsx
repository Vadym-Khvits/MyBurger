import * as React from 'react';
import { Component } from 'react';
import { IngredientTypes } from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

interface OwnStateProps {
    ingredients: string[];
}

class Checkout extends Component<OwnStateProps & any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ingredients: [
                IngredientTypes.Salad,
                IngredientTypes.Meat,
                IngredientTypes.Cheese
            ]
        };
    };

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default Checkout;