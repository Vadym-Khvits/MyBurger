import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name: string) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name: string) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredientsCounter: any) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredientsCounter: {...ingredientsCounter}
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return (dispatch: any) => {
        axios.get( '/ingredientsCounter.json' )
            .then( response => {
               dispatch(setIngredients(response.data));
            } )
            .catch( error => {
                dispatch(fetchIngredientsFailed());
            } );
    };
};