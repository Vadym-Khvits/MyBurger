import * as React from 'react';
import Aux from '../../hoc/_Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import * as classes from './Layout.css';

interface IOwnStateProps {
    showSideDrawer: boolean;
}

class Layout extends React.Component<IOwnStateProps & any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showSideDrawer: false
        };
    };

    public sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    public sideDrawerToggleHandler = () => {
        this.setState({showSideDrawer: true});
    }

    public render() {
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