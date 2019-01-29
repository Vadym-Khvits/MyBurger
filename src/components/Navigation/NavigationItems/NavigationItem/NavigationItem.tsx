import * as React from 'react';
import * as classes from '../../../../styles/components/Navigation.css';

const navigationItem = (props: any) => (
    <li className={classes.NavigationItem}>
        <a 
            href={props.link} 
            className={props.active ? classes.active : undefined}>{props.children}</a>
    </li>
);

export default navigationItem;