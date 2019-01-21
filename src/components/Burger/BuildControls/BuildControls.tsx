import * as React from 'react';

import BuildControl from './BuildControl/BuildControl';
import * as classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'Salad' },
    { label: 'Bacon', type: 'Bacon' },
    { label: 'Cheese', type: 'Cheese' },
    { label: 'Meat', type: 'Meat' },
    { label: 'Ketchup', type: 'Ketchup' },
    { label: 'Cucumber', type: 'Cucumber' }
];

interface IPassedProps extends React.Props<any> {
    ingredientAdded: (type: string) => void;
    ingredientRemoved: (type: string) => void;
    getDisabledInfo: (type: string) => boolean;
    price: number;
}

class BuildControls extends React.Component<IPassedProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    };

    public render() {
        const price = this.props.price.toFixed(2);
        return (
            <div className={classes.BuildControls}>
                <p>Current Price: <strong>{price}</strong></p>
                {controls.map(ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        disabled={this.props.getDisabledInfo(ctrl.type)}
                        // tslint:disable-next-line jsx-no-lambda
                        added={() => this.props.ingredientAdded(ctrl.type)}
                        // tslint:disable-next-line jsx-no-lambda
                        removed={() => this.props.ingredientRemoved(ctrl.type)}
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