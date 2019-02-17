import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/_Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler.js';
import axios from '../../axios-orders';

interface StateFromProps {
    ingredientsStack: string[];
    ingredientsCounter: any;
    purchasable: boolean;
    totalPrice: number;
    error: boolean;
}

interface OwnStateProps {
    purchasing: boolean;
}

class BurgerBuilder extends React.Component<OwnStateProps & StateFromProps & any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            purchasing: false
        };
    };

    componentDidMount() {
        this.props.onInitIngredients();
    }

    getDisabledInfo = (type: string) => {
        return this.props.ingredientsCounter[type] === 0;
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    reportResponse = (response: any) => {
        this.setState({ purchasing: false });
    }

    render() {
        let burger = this.props.error === true ?
            <p>Ingredients can't be loaded!</p> : <Spinner />

        if (this.props.ingredientsCounter) {
            burger =
                <Aux>
                    <Burger ingredients={this.props.ingredientsStack} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        getDisabledInfo={this.getDisabledInfo}
                        purchasable={this.props.purchasable}
                        price={this.props.totalPrice}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
        }

        const orderSummary = this.props.ingredientsCounter ?
                <OrderSummary
                    ingredients={this.props.ingredientsCounter}
                    price={this.props.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                />
                : null;

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = (state: any): StateFromProps => {
    return {
        ingredientsCounter: state.burgerBuilder.ingredientsCounter,
        ingredientsStack: state.burgerBuilder.ingredientsStack,
        purchasable: state.burgerBuilder.purchasable,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onIngredientAdded: (ingName: string) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName: string) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}

export default connect<{},{},any>(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));