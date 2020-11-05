import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const sidedrawer = (props) => {
/** This sidedrawer should only be visible when we click the menu text in the toolbar 
 * and should be closed when we touch the backdrop. Therefore, both 'Toolbar & Backdrop'
 * are related to each other. Since both these are connected to 'Layout' component, we will 
 * add method and state for the sidedrawer & backdrop to function together.  
 */

 let attachedClasses = [classes.SideDrawer, classes.Close];
 if(props.show) {
     attachedClasses = [classes.SideDrawer, classes.Open];
 }
    return (
        <Auxiliary>
            <Backdrop show={props.show} clicked={props.clicked} />
            <div className={attachedClasses.join(' ')} >
                <div className={classes.Logo} >
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
};


export default sidedrawer;