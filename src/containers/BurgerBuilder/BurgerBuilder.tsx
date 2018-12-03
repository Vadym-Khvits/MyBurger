import * as React from 'react';
import Aux from '../../hoc/_Aux';

import Burger from '../../components/Burger/Burger';


class BurgerBuilder extends React.Component<any> {
    public render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;