import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import * as classes from '../../../styles/containers/Checkout.css';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index';
import { AppState } from '../../../store/reducers/rootReducer';
import { Order } from '../../../store/reducers/order';

interface StateFromProps {
    ingredients: string[];
    price: number;
    loading: boolean;
}

interface DispatchFromProps {
    onOrderBurger: (orderData: Order) => void;
}

class ContactData extends Component<StateFromProps & DispatchFromProps & any, any> {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    }

    orderHandler = (event: any) => {
        event.preventDefault();
        const formData = {};
        for (const formElementIdentifier in this.state.orderForm) {
            if (formElementIdentifier) {
                formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
            }
        }
        const order = {
            Ingredients: this.props.ingredients,
            Price: this.props.price,
            OrderData: formData
        }
        this.props.onOrderBurger(order);
    }

    checkValidity(value: string, rules: any) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event: any, inputIdentifier: any) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (const identifier in updatedOrderForm) {
            if (identifier) {
                formIsValid = updatedOrderForm[identifier].valid && formIsValid;
            }            
        }
        this.setState({orderForm: updatedOrderForm, formIsValid});
    }

    render() {
        const formElementsArray = [];
        for (const key in this.state.orderForm) {
            if (key) {
                formElementsArray.push({
                    id: key,
                    config: this.state.orderForm[key]
                });
            }
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map((formElement: any) => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event: any) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        ingredients: state.burgerBuilder.ingredientsStack,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
};

const mapDispatchToProps = (dispatch: any): DispatchFromProps => {
    return {
        onOrderBurger: (orderData: Order) => dispatch(actions.purchaseBurger(orderData))
    };
};

export default connect<StateFromProps, DispatchFromProps, any>(mapStateToProps, mapDispatchToProps) (withErrorHandler(ContactData, axios));