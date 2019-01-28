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

interface PassedProps extends React.Props<any> {
    ingredientAdded: (type: string) => void;
    ingredientRemoved: (type: string) => void;
    getDisabledInfo: (type: string) => boolean;
    ordered: () => void;
    purchasable: boolean;
    price: number;
}

class BuildControls extends React.Component<PassedProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    };

    render() {
        const price = this.props.price.toFixed(2);
        return (
            <div className={classes.BuildControls}>
                <p>Current Price: <strong>{price}</strong></p>
                {controls.map(ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        disabled={this.props.getDisabledInfo(ctrl.type)}
                        added={() => this.props.ingredientAdded(ctrl.type)}
                        removed={() => this.props.ingredientRemoved(ctrl.type)}
                    />
                ))}
                <button
                    className={classes.OrderButton}
                    disabled={!this.props.purchasable}
                    onClick={this.props.ordered}
                >ORDER NOW</button>
            </div>)
    };
}

export default BuildControls;