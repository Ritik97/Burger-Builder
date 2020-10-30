import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = (props) => (

    <Auxiliary>
        <div>
            Toolbar, SideDrawer, BackDrop
        </div>
        <main className = {classes.content}>
            {props.children}
        </main>
        
    </Auxiliary>
);



export default layout;
