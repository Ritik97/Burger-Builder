import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import  classes from './BuildControls.css'


const controls = [
    {label: 'Meat', type: 'Meat'},
    {label: 'Cheese', type: 'Cheese'},
    {label: 'Salad', type: 'Salad'},
    {label: 'Bacon', type: 'Bacon'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price: <strong>₹{props.totalPrice}</strong></p>
        {
            controls.map(ctrl => {
                return <BuildControl key={ctrl.label} label={ctrl.label} />
            })
        }
    </div>
);


export default buildControls;