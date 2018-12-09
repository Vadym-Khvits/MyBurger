import * as React from 'react';
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
            case ('bread-bottom'):
                ingredient = <div className={styles.BreadBottom} />;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1} />
                        <div className={styles.Seeds2} />
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={styles.Meat} />;
                break;
            case ('cheese'):
                ingredient = <div className={styles.Cheese} />;
                break;
            case ('bacon'):
                ingredient = <div className={styles.Bacon} />;
                break;
            case ('salad'):
                ingredient = <div className={styles.Salad} />;
                break;
            case ('ketchup'):
                ingredient = <div className={styles.Ketchup} />;
                break;
            case ('cucumber'):
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