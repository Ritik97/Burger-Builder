import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    removeBackdropHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    };

    openSidedrawerHandler = () => {
        this.setState({
            showSideDrawer: true
        })
    }
    
    render() {
        return (
            <Auxiliary>
                <Toolbar openSidedrawer={this.openSidedrawerHandler} />
                <SideDrawer show={this.state.showSideDrawer} clicked={this.removeBackdropHandler} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }

};


export default Layout;
