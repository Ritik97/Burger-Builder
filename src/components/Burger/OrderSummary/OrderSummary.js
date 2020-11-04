import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

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
        <p>Continue to Chechout?</p>
    </Auxiliary>
);

};

export default orderSummary;