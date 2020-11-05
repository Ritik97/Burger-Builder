import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import IngredientContext from '../../context/ingredient-context';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
/** The Modal should always be included where it has to be shown */

const INGREDIENTS_PRICE = {
    Salad: 15,
    Cheese: 10,
    Meat: 50,
    Bacon: 15
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            Meat: 0,
            Cheese: 0,
            Salad: 0,
            Bacon: 0
        },
        purchasable: false,
        totalPrice: 0,
        purchasing: false
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    };
    
    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    };

    purchaseContinueHandler = () => {
        alert('You Continue');
        //this.purchaseCancelHandler();
    };

    updatePurchaseState = (ingredients) => {
        // const updatedIngredients = ingredients
        // let purchasable = false
        // for (let keys in updatedIngredients) {
        //     if (updatedIngredients[keys] > 0) {
        //         purchasable = true
        //         break;
        //     }
        // }
        const sum = Object.values(ingredients).reduce((acc, item) => {
            return acc + item
        }, 0)

        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredient = (ingredient) => {
        console.log(ingredient + ' added');
        const oldIngredient = { ...this.state.ingredients }
        oldIngredient[ingredient] = oldIngredient[ingredient] + 1
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice + INGREDIENTS_PRICE[ingredient]
        console.log(updatedPrice)
        this.setState({
            ingredients: oldIngredient,
            totalPrice: updatedPrice
        })
        this.updatePurchaseState(oldIngredient);
    };

    removeIngredient = (ingredient) => {
        const oldIngredient = { ...this.state.ingredients }
        if (oldIngredient[ingredient] > 0) {
            oldIngredient[ingredient] = oldIngredient[ingredient] - 1
            console.log(ingredient + ' removed');
            const oldPrice = this.state.totalPrice
            var updatedPrice = oldPrice - INGREDIENTS_PRICE[ingredient]
            console.log(updatedPrice)
        }

        this.setState({
            ingredients: oldIngredient,
            totalPrice: updatedPrice
        })

        this.updatePurchaseState(oldIngredient);
    };

    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let keys in disabledInfo) {
            disabledInfo[keys] = disabledInfo[keys] <= 0
        }
        return (
            <Auxiliary>
                <IngredientContext.Provider value={{
                    addIngredient: this.addIngredient,
                    removeIngredient: this.removeIngredient,
                    disabled: disabledInfo
                }}>

                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls totalPrice={this.state.totalPrice} 
                    purchasable={this.state.purchasable} showModal={this.purchaseHandler}/>

                </IngredientContext.Provider>
                <Modal show={this.state.purchasing} cancelPurchase={this.purchaseCancelHandler} >
                    <OrderSummary ingredients={this.state.ingredients} 
                    continuePurchase={this.purchaseContinueHandler}
                    cancelPurchase={this.purchaseCancelHandler} totalPrice={this.state.totalPrice} />
                </Modal>
            </Auxiliary>
        );
    };


};



export default BurgerBuilder;