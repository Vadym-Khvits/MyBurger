import * as React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { IngredientTypes } from './BurgerIngredient/BurgerIngredient';

import * as styles from '../../styles/components/Burger.css';

interface PassedProps {
    ingredients: string[];
}

class Burger extends React.Component<PassedProps, any> {
    constructor(props: any) {
        super(props);
    };

    render() {
        let layer = 1;
        let inputIngredients = null;
        if (this.props.ingredients) {
            inputIngredients = [...this.props.ingredients].reverse().map((name: string) => {
                return <BurgerIngredient key={layer++} type={name} />
            });
        }

        const burgerIngredients = inputIngredients && inputIngredients.length !== 0
            ? inputIngredients
            : <p>Please start adding ingredients!</p>;

        return (
            <div className={styles.Burger}>
                <BurgerIngredient type={IngredientTypes.BreadTop} />
                {burgerIngredients}
                <BurgerIngredient type={IngredientTypes.BreadBottom} />
            </div>
        );
    }
}

export default Burger;