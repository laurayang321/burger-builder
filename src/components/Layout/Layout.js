import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        // this is the clean way of setState when depend on the old state
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });

        // Due to the Asynchronous nature of setState, this may lead to unexpected outcomes
        //this.setState({ showSideDrawer: !this.state.showSideDrawer });
    }

    render () {
        return (
            // hoc
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
    


export default Layout;