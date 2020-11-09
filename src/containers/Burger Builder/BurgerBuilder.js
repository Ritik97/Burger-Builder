import React, { Component } from 'react';
import axios from '../../axios-orders';

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
        /**The base url in already set in the 'axios-orders.js' 
         * /orders will be appended to the base url and the orders collection will be
         * created on the fly, just like mongodb.
         * '.json' has to be added in the url when working with firestore.
         * For production ready application, the totalPrice should always be calculated on the
         * server, so that the user can't manipulate the code
        */

        const order = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customer:  {
                name: 'Ritik Sinha',
                address: {
                    street: 'Teststreet',
                    pincode: '843108',
                    dist: 'Muzaffarpur'
                },
                email: 'ritiksinha2013@live.com'
            },
            deliveryMethod: 'instant'
        }

        axios.post('/orders.json', order)
        .then(res => console.log(res))
        .catch(err => console.log(err));


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
                        purchasable={this.state.purchasable} showModal={this.purchaseHandler} />

                </IngredientContext.Provider>
                <Modal show={this.state.purchasing} clicked={this.purchaseCancelHandler} >
                    <OrderSummary ingredients={this.state.ingredients}
                        continuePurchase={this.purchaseContinueHandler}
                        clicked={this.purchaseCancelHandler} totalPrice={this.state.totalPrice} />
                </Modal>
            </Auxiliary>
        );
    };


};



export default BurgerBuilder;