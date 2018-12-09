import * as React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import * as styles from './Burger.css';

class Burger extends React.Component<any> {
    constructor(props: any) {
        super(props);
    };

    public render() {
        return (
            <div className={styles.Burger}>
                <BurgerIngredient type="bread-top" />
                <BurgerIngredient type="salad" />
                <BurgerIngredient type="bacon" />
                <BurgerIngredient type="cucumber" />
                <BurgerIngredient type="cheese" />
                <BurgerIngredient type="ketchup" />
                <BurgerIngredient type="meat" />
                <BurgerIngredient type="bread-bottom" />
            </div>
        );
    }
}

export default Burger;