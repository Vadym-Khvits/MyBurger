import * as React from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
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
        const randomIngs = ['bacon','salad','cucumber','cheese','meat','ketchup']; 
        
        this.setState({
            ingredients: [...randomIngs]
        });
    }

    public render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;