import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const INGREDIENT_PRICES = {
    Bacon: 1.4,
    Cheese: 0.5,
    Cucumber: 0.3,
    Ketchup: 0.2,
    Meat: 1.4,
    Salad: 0.4
};

const initialState = {
    ingredientsCounter: null,
    ingredientsStack: [] as string[],
    purchasable: false,
    totalPrice: 4,
    error: false
};

const updateBurgerBuilder = (state: any, type: string, increment: number) => {
    const updatedCounter = {
        ...state.ingredientsCounter
    };
    updatedCounter[type] = state.ingredientsCounter[type] + increment;

    const updatedStack = [...state.ingredientsStack];
    let priceAddition;
    if (increment < 0) {
        const elementToRemove = updatedStack.lastIndexOf(type);
        updatedStack.splice(elementToRemove, 1);
        priceAddition = -INGREDIENT_PRICES[type];
    } else {
        updatedStack.push(type);
        priceAddition = INGREDIENT_PRICES[type];
    }

    const oldPrice = state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    const updatedPurchasable = updatedStack.length > 0;

    return updateObject(state, {
        ingredientsCounter: updatedCounter,
        ingredientsStack: updatedStack,
        purchasable: updatedPurchasable,
        totalPrice: newPrice
    })
};

const setIngredients = (state: any, action: any) => {
    return updateObject(state, {
        ingredientsCounter: {
            Bacon: action.ingredientsCounter.Bacon,
            Cheese: action.ingredientsCounter.Cheese,
            Cucumber: action.ingredientsCounter.Cucumber,
            Ketchup: action.ingredientsCounter.Ketchup,
            Meat: action.ingredientsCounter.Meat,
            Salad: action.ingredientsCounter.Salad
        },
        ingredientsStack: [] as string[],
        purchasable: false,
        totalPrice: 4,
        error: false
    });
};

const fetchIngredientsFailed = (state: any, action: any) => {
    return updateObject(state, {error: true});
};

const burgerBuilderReducer = (state = initialState, action: any) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT: return updateBurgerBuilder(state, action.ingredientName, 1);
        case actionTypes.REMOVE_INGREDIENT: return updateBurgerBuilder(state, action.ingredientName, -1);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default burgerBuilderReducer;