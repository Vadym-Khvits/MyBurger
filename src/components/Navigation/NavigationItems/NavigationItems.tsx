import * as React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import * as classes from '../../../styles/components/Navigation.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;