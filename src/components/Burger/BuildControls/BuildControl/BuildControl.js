import React, { useContext } from 'react';
import classes from './BuildControl.css';
import IngredientContext from '../../../../context/ingredient-context';

const buildControl = (props) => {

    const ingredientContext = useContext(IngredientContext);

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}
                onClick={() => ingredientContext.addIngredient(props.label)} >More</button>
            <button className={classes.More}
                onClick={() => ingredientContext.removeIngredient(props.label)}
                disabled={ingredientContext.disabled[props.label]} >Less</button>
        </div>

    )
};

export default buildControl;
