import * as React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import * as classes from '../../../styles/components/Navigation.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;