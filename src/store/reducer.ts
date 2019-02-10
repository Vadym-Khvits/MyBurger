import * as actionTypes from './actions';
// import { IngredientTypes } from 'src/components/Burger/BurgerIngredient/BurgerIngredient';
// import INGREDIENT_PRICES from 'src/containers/BurgerBuilder/BurgerBuilder'

const initialState = {
    ingredientsCounter: {
        Bacon: 0,
        Cheese: 0,
        Cucumber: 0,
        Ketchup: 0,
        Meat: 0,
        Salad: 0
    },
    ingredientsStack: [] as string[],
    // totalPrice: 4
};

// export const addIngredientHandler = (type: string) => {
//     this.updateIngredient(type, 1)
// }

// export const removeIngredientHandler = (type: string) => {
//     const oldCount = this.state.ingredientsCounter[type];
//     if (oldCount === 0) {
//         return;
//     }
//     this.updateIngredient(type, -1);
// }

// const updateIngredient = (type: string, increment: number) => {
//     const updatedCounter = {
//         ...this.state.ingredientsCounter
//     };
//     updatedCounter[type] = this.state.ingredientsCounter[type] + increment;

//     const updatedStack = [...this.state.ingredientsStack];
//     let priceAddition;
//     if (increment < 0) {
//         const elementToRemove = updatedStack.lastIndexOf(type);
//         updatedStack.splice(elementToRemove, 1);
//         priceAddition = -INGREDIENT_PRICES[type];
//     } else {
//         updatedStack.push(type);
//         priceAddition = INGREDIENT_PRICES[type];
//     }
    
//     const oldPrice = this.state.totalPrice;
//     const newPrice = oldPrice + priceAddition;
//     const updatedPurchasable = updatedStack.length > 0;

//     this.setState({
//         ingredientsCounter: updatedCounter,
//         ingredientsStack: updatedStack,
//         purchasable: updatedPurchasable,
//         totalPrice: newPrice
//     });
// }

const reducer = (state = initialState, action: any) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredientsCounter: {
                    ...state.ingredientsCounter,
                    [action.ingredientName]: state.ingredientsCounter[action.ingredientName] + 1
                },
                ingredientsStack: {
                    ...state.ingredientsStack // please rewise logic
                },
                // totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredientsCounter: {
                    ...state.ingredientsCounter,
                    [action.ingredientName]: state.ingredientsCounter[action.ingredientName] - 1
                },
                ingredientsStack: {
                    ...state.ingredientsStack // please rewise logic
                },
                // totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;