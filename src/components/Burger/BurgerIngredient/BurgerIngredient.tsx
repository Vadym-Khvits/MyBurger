import * as React from 'react';
import * as styles from './BurgerIngredient.css';

export enum IngredientTypes {
    BreadBottom = 'BreadBottom',
    BreadTop = 'BreadTop',
    Meat = 'Meat',
    Salad = 'Salad',
    Cheese = 'Cheese',
    Bacon = 'Bacon',
    Ketchup = 'Ketchup',
    Cucumber = 'Cucumber'
}

interface IPassedProps extends React.Props<any> {
    type: string;
}

class BurgerIngredient extends React.Component<IPassedProps, any> {
    constructor(props: any) {
        super(props);
    };

    public render() {
        let ingredient = null;

        switch (this.props.type) {
            case (IngredientTypes.BreadBottom):
                ingredient = <div className={styles.BreadBottom} />;
                break;
            case (IngredientTypes.BreadTop):
                ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1} />
                        <div className={styles.Seeds2} />
                    </div>
                );
                break;
            case (IngredientTypes.Meat):
                ingredient = <div className={styles.Meat} />;
                break;
            case (IngredientTypes.Cheese):
                ingredient = <div className={styles.Cheese} />;
                break;
            case (IngredientTypes.Bacon):
                ingredient = <div className={styles.Bacon} />;
                break;
            case (IngredientTypes.Salad):
                ingredient = <div className={styles.Salad} />;
                break;
            case (IngredientTypes.Ketchup):
                ingredient = <div className={styles.Ketchup} />;
                break;
            case (IngredientTypes.Cucumber):
                ingredient = (
                    <div className={styles.Cucumbers} >
                        <div className={styles.Cucumber} />
                        <div className={styles.Cucumber} />
                        <div className={styles.Cucumber} />
                    </div>
                );
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

export default BurgerIngredient;