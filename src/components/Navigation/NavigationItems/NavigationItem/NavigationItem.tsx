import * as React from 'react';
import * as classes from '../../../../styles/components/Navigation.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props: any) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            exact={true}
            activeClassName={classes.active}
            >
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;