import * as React from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/_Aux';

interface IOwnStateProps {
    purchasing: boolean;
    ingredients: string[];
}

class BurgerBuilder extends React.Component<IOwnStateProps & any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            ingredients: [],
            purchasing: false
        };
    };

    public componentWillMount() {
        this.setState({
            ingredients:
            [
                'salad',
                'cucumber',
                'cheese',
                'meat',
                'ketchup',
                'cheese'
            ]
        });
    }

    public render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;