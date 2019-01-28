import * as React from 'react';
import Aux from '../../hoc/_Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import * as classes from './Layout.css';

interface OwnStateProps {
    showSideDrawer: boolean;
}

class Layout extends React.Component<OwnStateProps & any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showSideDrawer: false
        };
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    sideDrawerToggleHandler = () => {
        this.setState({showSideDrawer: true});
    }

    render() {
        return (
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}
            />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
}
export default Layout;