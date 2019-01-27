import * as React from 'react';

import * as classes from './DrawerToggle.css';

const drawerToggle = (props: any) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div/>
        <div/>
        <div/>
    </div>
);

export default drawerToggle;