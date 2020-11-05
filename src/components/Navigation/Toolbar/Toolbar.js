import React from 'react';
import Logo from '../../Logo/Logo'
import classes from './Toolbar.css';

const toolbar = (props) => (

<header className={classes.Toolbar} >
    <div>Drawer Toggle</div>
    <Logo />
    <div>Navigation Items</div>
</header>

);

export default toolbar;