import * as React from 'react';
// import * as PropTypes from 'prop-types'; // PropTypes.ReactElementLike &

import * as styles from './BurgerIngredient.css';

interface IPassedProps extends React.Props<any> { 
    type: string;
}

class BurgerIngredient extends React.Component<IPassedProps & any> {
    constructor(props: any) {
        super(props);
    };

    public render() {
        let ingredient = null;        

        switch (this.props.type) {
            case ( 'bread-bottom'):
                ingredient = <div className='BreadBottom' />;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className='BreadTop'>
                        <div className='Seeds1' />
                        <div className='Seeds2' />
                        <p>bread</p>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className='Meat' />;
                break;
            case ('cheese'):
                ingredient = <div className='Cheese' />;
                break;
            case ('bacon'):
                ingredient = <div className='Bacon' />;
                break;

            case ('salad'):
                ingredient = <div className='Salad' />;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

export default BurgerIngredient;