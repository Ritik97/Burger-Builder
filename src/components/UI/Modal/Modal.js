import React from 'react';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const modal = (props) => {

    return(
    <Auxiliary>
        {console.log('Modal Renders')}
        <Backdrop show={props.show} clicked={props.clicked} />
    <div className={classes.Modal} 
    style={{
        transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity : props.show ? '1' : '0' 
    }} >
        {props.children}
    </div>
    </Auxiliary>
);

}

export default React.memo(modal);