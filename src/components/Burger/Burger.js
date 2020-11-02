import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            return <BurgerIngredient key={igkey + i} type={igkey} />
        });
    }).reduce((acc, item) => {
        return acc.concat(item);
    }, []);

    console.log(transformedIngredients);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>No Ingredients Added</p>
    } 

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='BreadTop' />
            {transformedIngredients}
            <BurgerIngredient type='BreadBottom' />
        </div>
    );
};



export default burger;