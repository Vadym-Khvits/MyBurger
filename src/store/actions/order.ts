import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
import { Order } from '../reducers/order';

export const purchaseBurgerSuccess = (id: string, order: Order) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: {...order}
    };
};

export const purchaseBurgerFail = (error: any) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: {...error}
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (order: Order) => {
    return (dispatch: any) => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', order)
            .then( response => {
                dispatch(purchaseBurgerSuccess(response.data.name, order));
            } )
            .catch( error => {
                dispatch(purchaseBurgerFail(error));
            } );
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = (orders: Order[]) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: [...orders]
    };
};

export const fetchOrdersFail = (error: any) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: {...error}
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = () => {
    return (dispatch: any) => {
        dispatch(fetchOrdersStart());
        axios.get('/orders.json')
            .then( res => {
                const fetchedOrders = [] as Order[];
                for (const key in res.data) {
                    if (key) {
                        fetchedOrders.push({
                            ...res.data[key],
                            Id: key
                        });
                    }
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch( err => {
                dispatch(fetchOrdersFail(err));
            });
    };
};