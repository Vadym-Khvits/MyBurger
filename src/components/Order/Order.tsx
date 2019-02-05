import * as React from 'react';
import * as classes from '../../styles/components/Order.css';

const order = ( props: any ) => {
    const ingredients = [];
    
    for (const layerNumber in props.ingredients) {
        if(layerNumber){
            ingredients.push(
                {
                    layer: layerNumber,
                    name: props.ingredients[layerNumber]
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
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;