import * as React from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/_Aux';

interface IOwnStateProps {
    purchasing: boolean;
    ingredientsStack: string[];
    ingredientsCounter: number;
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
            purchasing: false
            // totalPrice: 4
        };
    };

    public addIngredientHandler = (type: string) => {
        const updatedCounter = {
            ...this.state.ingredientsCounter
        };
        updatedCounter[type] = this.state.ingredientsCounter[type] + 1;
        
        const updatedStack = [
            ...this.state.ingredientsStack
        ];
        updatedStack.push(type);

        this.setState({
            ingredientsCounter: updatedCounter,
            ingredientsStack: updatedStack
        });

        //     // const priceAddition = INGREDIENT_PRICES[type];
        //     // const oldPrice = this.state.totalPrice;
        //     // const newPrice = oldPrice + priceAddition;
        //     // this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        //     // this.updatePurchaseState(updatedIngredients);
    }

    public removeIngredientHandler = (type: string) => {
            const oldCount = this.state.ingredientsCounter[type];
            if (oldCount === 0) {
                return;
            }
            const updatedCounter = {
                ...this.state.ingredientsCounter
            };
            updatedCounter[type] = this.state.ingredientsCounter[type] - 1;

            const updatedStack = [
                ...this.state.ingredientsStack
            ];
            const elementToRemove = updatedStack.lastIndexOf(type);
            updatedStack.splice(elementToRemove,1);
    
            this.setState({
                ingredientsCounter: updatedCounter,
                ingredientsStack: updatedStack
            });

        //     // const priceDeduction = INGREDIENT_PRICES[type];
        //     // const oldPrice = this.state.totalPrice;
        //     // const newPrice = oldPrice - priceDeduction;
        //     // this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        //     // this.updatePurchaseState(updatedIngredients);
    }


    public render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredientsStack} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;