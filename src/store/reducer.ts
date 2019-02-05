import * as actionTypes from './actions';
// import { IngredientTypes } from 'src/components/Burger/BurgerIngredient/BurgerIngredient';
import INGREDIENT_PRICES from 'src/containers/BurgerBuilder/BurgerBuilder'

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
    totalPrice: 4
};

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
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
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
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;