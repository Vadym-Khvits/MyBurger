import * as React from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import { IngredientTypes } from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import Aux from '../../hoc/_Aux';

interface IOwnStateProps {
    purchasing: boolean;
    ingredientsStack: string[];
    ingredients: any;
}

class BurgerBuilder extends React.Component<IOwnStateProps & any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ingredients: {},
            ingredientsStack: [],
            purchasing: false
        };
    };

    // private initIngredients = () => {

    // }

    public componentWillMount() {
        const dummyIngs = [
            IngredientTypes.Bacon,
            IngredientTypes.Salad,
            IngredientTypes.Cucumber,
            IngredientTypes.Cheese,
            IngredientTypes.Meat,
            IngredientTypes.Ketchup
        ];
        
        this.setState({
            ingredientsStack: [...dummyIngs]
        });
    }

    public addIngredientHandler = ( type: string ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        // const priceAddition = INGREDIENT_PRICES[type];
        // const oldPrice = this.state.totalPrice;
        // const newPrice = oldPrice + priceAddition;
        // this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        // this.updatePurchaseState(updatedIngredients);
    }

    public removeIngredientHandler = ( type: string ) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        // const priceDeduction = INGREDIENT_PRICES[type];
        // const oldPrice = this.state.totalPrice;
        // const newPrice = oldPrice - priceDeduction;
        // this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        // this.updatePurchaseState(updatedIngredients);
    }


    public render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredientsStack} />
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;