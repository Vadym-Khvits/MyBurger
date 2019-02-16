import * as actionTypes from '../actions/actionTypes';

const INGREDIENT_PRICES = {
    Bacon: 1.4,
    Cheese: 0.5,
    Cucumber: 0.3,
    Ketchup: 0.2,
    Meat: 1.4,
    Salad: 0.4
};

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
    purchasable: false,
    totalPrice: 4
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

    return {
        ...state,
        ingredientsCounter: updatedCounter,
        ingredientsStack: updatedStack,
        purchasable: updatedPurchasable,
        totalPrice: newPrice
    };
}

const reducer = (state = initialState, action: any) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return updateBurgerBuilder(state, action.ingredientName, 1);
        case actionTypes.REMOVE_INGREDIENT:
            return updateBurgerBuilder(state, action.ingredientName, -1);
        default:
            return state;
    }
};

export default reducer;