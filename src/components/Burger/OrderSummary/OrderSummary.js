import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './OrderSummary.css';

const orderSummary = (props) => {

const ingredients = props.ingredients

const ingredientList = Object.keys(ingredients).map(igkey => {
return <li key={igkey}>{igkey} : {ingredients[igkey]}</li>
})

return(
    <Auxiliary>
        <h3>Your Order</h3>
        <p>A toothsome burger with the following ingredients: </p>
        <ul>
        {ingredientList}
        </ul> 
        <p><strong>Total Price: ₹ {props.totalPrice} </strong></p>
        <p>Continue to Chechout?</p>
        <button className={[classes.Button, classes.Success].join(' ')} 
        onClick={props.continuePurchase} >CONTINUE</button>
        <button className={[classes.Button, classes.Danger].join(' ')} 
        onClick={props.clicked} >CANCEL</button>
    </Auxiliary>
);

};

export default orderSummary;