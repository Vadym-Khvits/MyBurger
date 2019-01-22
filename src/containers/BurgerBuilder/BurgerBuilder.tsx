import * as React from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/_Aux';

const INGREDIENT_PRICES = {
    Bacon: 1.4,
    Cheese: 0.5,
    Cucumber: 0.3,
    Ketchup: 0.2,
    Meat: 1.4,
    Salad: 0.4
};

interface IOwnStateProps {
    purchasable: boolean;
    purchasing: boolean;
    ingredientsStack: string[];
    ingredientsCounter: number;
    totalPrice: number;
}

class BurgerBuilder extends React.Component<IOwnStateProps & any, any> {
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

    public addIngredientHandler = (type: string) => {
        this.updateIngredient(type, 1)
    }

    public removeIngredientHandler = (type: string) => {
        const oldCount = this.state.ingredientsCounter[type];
        if (oldCount === 0) {
            return;
        }
        this.updateIngredient(type, -1);
    }

    public getDisabledInfo = (type: string) => {
        return this.state.ingredientsCounter[type] === 0;
    }

    public purchaseHandler = () =>{
        this.setState({
            purchasing: true
        })
    }

    public purchaseCancelHandler = () =>{
        this.setState({
            purchasing: false
        })
    }

    public purchaseContinueHandler = () =>{
        alert('You continue!');
    }

    public render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredientsCounter}
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

    private updateIngredient = (type: string, increment: number) => {
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
}

export default BurgerBuilder;