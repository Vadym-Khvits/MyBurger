import * as React from 'react';

import BuildControl from './BuildControl/BuildControl';
import * as classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

class BuildControls extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    };

    public render() {
        const price = '4.00'; // this.props.price.toFixed(2);
        return (
            <div className={classes.BuildControls}>
                <p>Current Price: <strong>{price}</strong></p>
                {controls.map(ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        // added={props.ingredientAdded(ctrl.type)}
                        // removed={props.ingredientRemoved(ctrl.type)}
                        // disabled={props.disabled[ctrl.type]}
                    />
                ))}
                <button
                    className={classes.OrderButton}
                // disabled={!props.purchasable}
                >ORDER NOW</button>
            </div>)
    };
}

export default BuildControls;