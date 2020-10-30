import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    return(
        <div className={ classes.Burger }>
            <BurgerIngredient type = 'BreadTop'/>
            <BurgerIngredient type = 'Meat'/>
            <BurgerIngredient type = 'Cheese'/>
            <BurgerIngredient type = 'Salad'/>
            <BurgerIngredient type = 'Bacon'/>
            <BurgerIngredient type = 'BreadBottom' /> 
        </div>
    );
};



export default burger;