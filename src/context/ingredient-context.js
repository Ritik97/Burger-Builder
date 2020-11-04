import React from 'react';

const ingredientContext = React.createContext({
    addIngredient: () => { },
    removeIngredient: () => { }
});



export default ingredientContext;