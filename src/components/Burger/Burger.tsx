import * as React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { IngredientTypes } from './BurgerIngredient/BurgerIngredient';

import * as styles from './Burger.css';

interface IPassedProps {
    ingredients: string[];
}

class Burger extends React.Component<IPassedProps, any> {
    constructor(props: any) {
        super(props);
    };

    public render() {
        let layer = 1;
        const inputIngredients = this.props.ingredients.map((name: string) => {
            return <BurgerIngredient key={layer++} type={name} />
        });

        const burgerIngredients = inputIngredients.length !== 0
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