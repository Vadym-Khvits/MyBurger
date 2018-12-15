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
        // const randomIngs = ['salad','cucumber','cheese','meat','ketchup','cheese']; 
        
        this.setState({
            ingredients: []
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