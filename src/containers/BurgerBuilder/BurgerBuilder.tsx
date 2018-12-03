import * as React from 'react';
import Aux from '../../hoc/_Aux'


class BurgerBuilder extends React.Component<any> {
    public render () {
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;