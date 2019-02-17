import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

export interface OrderState {
    orders: Order[];
    loading: boolean;
    purchased: boolean;
}

const initialState: OrderState = {
    orders: [],
    loading: false,
    purchased: false
};

export interface Order {
    Id: string;
    Ingredients: string[];
    Price: number;
    OrderData?: any;
}

const purchaseInit = (state: OrderState, action: any) => {
    return updateObject(state, {purchased: false});
};

const purchaseBurgerStart = (state: OrderState, action: any) => {
    return updateObject(state, {loading: false});
};

const purchaseBurgerSuccess = (state: OrderState, action: any) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
   });
};

const purchaseBurgerFail = (state: OrderState, action: any) => {
    return updateObject(state, {loading: false});
};

const fetchOrdersStart = (state: OrderState, action: any) => {
    return updateObject(state, {loading: true});
};

const fetchOrdersSuccess = (state: OrderState, action: any) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
   });
};

const fetchOrdersFail = (state: OrderState, action: any) => {
    return updateObject(state, {loading: false});
};

const reducer = (state: OrderState = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action)
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
        default: return state;
   }
};

export default reducer;