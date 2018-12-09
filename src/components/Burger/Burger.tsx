import * as React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import './Burger.css';

// const burger = () => (
//     <div className="Burger">
//         <BurgerIngredient type="bread-top" />
//         <BurgerIngredient type="cheese" />
//         <BurgerIngredient type="meat" />
//         <BurgerIngredient type="bread-bottom" />
//     </div>
// );


class Burger extends React.Component<any> {
    constructor(props: any) {
        super(props);
    };

    public render() {
        return (
            <div className="Burger">
            <p>burger components</p>
                <BurgerIngredient type="bread-top" />
                <BurgerIngredient type="cheese" />
                <BurgerIngredient type="meat" />
                <BurgerIngredient type="bread-bottom" />                
            </div>
        );
    }
}

export default Burger;