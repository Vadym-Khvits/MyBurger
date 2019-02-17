import * as React from 'react';
import * as classes from '../../styles/components/Order.css';
import { Order } from '../../store/reducers/order';

export interface PassedProps {
    order: Order;
}

class OrderBlock extends React.Component<PassedProps & any, any> {
    constructor(props: any) {
        super(props);
    };

    render () {
        const { order } = this.props;
        const ingredients = [];
    
        for (const layerNumber in order.Ingredients) {
            if(layerNumber){
                ingredients.push(
                    {
                        layer: layerNumber,
                        name: order.Ingredients[layerNumber]
                    }
                );
            }
        }
    
        const ingredientOutput = ingredients.map(ig => {
            return <span 
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'
                    }}
                key={ig.layer}>{ig.layer} ({ig.name})</span>;
        });

        return (
            <div className={classes.Order}>
                <p>Ingredients: {ingredientOutput}</p>
                <p>Price: <strong>USD {order.Price.toFixed(2)}</strong></p>
            </div>
        );
    }
}

export default OrderBlock;