import * as React from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/_Aux';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    Bacon: 1.4,
    Cheese: 0.5,
    Cucumber: 0.3,
    Ketchup: 0.2,
    Meat: 1.4,
    Salad: 0.4
};

interface OwnStateProps {
    purchasable: boolean;
    purchasing: boolean;
    ingredientsStack: string[];
    ingredientsCounter: number;
    totalPrice: number;
}

class BurgerBuilder extends React.Component<OwnStateProps & any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ingredientsCounter: {
                Bacon: 0,
                Cheese: 0,
                Cucumber: 0,
                Ketchup: 0,
                Meat: 0,
                Salad: 0
            },
            ingredientsStack: [] as string[],
            purchasable: false,
            purchasing: false,
            totalPrice: 4
        };
    };

    addIngredientHandler = (type: string) => {
        this.updateIngredient(type, 1)
    }

    removeIngredientHandler = (type: string) => {
        const oldCount = this.state.ingredientsCounter[type];
        if (oldCount === 0) {
            return;
        }
        this.updateIngredient(type, -1);
    }

    getDisabledInfo = (type: string) => {
        return this.state.ingredientsCounter[type] === 0;
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        const order = {
            ingredientsCounter: this.state.ingredientsCounter,
            price: this.state.totalPrice,
            customer: {
                name: 'Vadym',
                adress: {
                    street: 'Chapter10 street',
                    zioCode: '121212',
                    country: 'Ukraine'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        alert('Your order was received!');
    }

    updateIngredient = (type: string, increment: number) => {
        const updatedCounter = {
            ...this.state.ingredientsCounter
        };
        updatedCounter[type] = this.state.ingredientsCounter[type] + increment;

        const updatedStack = [...this.state.ingredientsStack];
        let priceAddition;
        if (increment < 0) {
            const elementToRemove = updatedStack.lastIndexOf(type);
            updatedStack.splice(elementToRemove, 1);
            priceAddition = -INGREDIENT_PRICES[type];
        } else {
            updatedStack.push(type);
            priceAddition = INGREDIENT_PRICES[type];
        }
        
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        const updatedPurchasable = updatedStack.length > 0;

        this.setState({
            ingredientsCounter: updatedCounter,
            ingredientsStack: updatedStack,
            purchasable: updatedPurchasable,
            totalPrice: newPrice
        });
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredientsCounter}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredientsStack} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    getDisabledInfo={this.getDisabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }    
}

export default BurgerBuilder;