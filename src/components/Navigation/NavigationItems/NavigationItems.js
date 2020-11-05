import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = () => (

    <ul className={classes.NavigationItems}>
        <NavigationItem destination='#' active>Burger Builder</NavigationItem>
        <NavigationItem destination='#'>Checkout</NavigationItem>
    </ul>


);



export default navigationItems;