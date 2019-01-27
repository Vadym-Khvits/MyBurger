import * as React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as classes from './Toolbar.css';

// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props: any ) => (
    <header className={classes.Toolbar}>
        {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;