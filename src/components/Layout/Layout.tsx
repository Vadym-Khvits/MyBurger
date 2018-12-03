import * as React from 'react';
import Aux from '../../hoc/_Aux';
import './Layout.css';

const layout = (props: any) => (
    <Aux>
        <p>Toolbar, SideDrawer, Backdrop</p>
        <main className='Content'>
            {props.children}
        </main>
    </Aux>
);

export default layout;