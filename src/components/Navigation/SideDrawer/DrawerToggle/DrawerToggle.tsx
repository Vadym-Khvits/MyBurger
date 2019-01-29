import * as React from 'react';
import * as classes from '../../../../styles/components/SideDrawer.css';

const drawerToggle = (props: any) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div/>
        <div/>
        <div/>
    </div>
);

export default drawerToggle;