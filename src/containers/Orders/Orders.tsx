import * as React from 'react';
import { connect } from 'react-redux';
import OrderBlock from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Order } from '../../store/reducers/order';

interface StateFromProps {
    orders: Order[];
    loading: boolean;
    purchased: boolean;
}

interface DispatchFromProps {
    onFetchOrders: () => void;
}

class Orders extends React.Component<StateFromProps & DispatchFromProps & any, any> {   
    constructor(props: any) {
        super(props);
    };

    componentDidMount() {
        this.props.onFetchOrders();
    }

    render () {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders = this.props.orders.map((order: Order) => (
                <OrderBlock order={order} />
            ))
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));