import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     // BreadTop: 0,
        //     // BreadBottom: 0,
        //     // Meat: 0,
        //     // Cheese: 0,
        //     // Salad: 0,
        //     // Bacon: 0
        // }
    };

    state = {
        ingredients: {
            Meat: 1,
            Cheese: 2,
            Salad: 2,
            Bacon: 1
        },
        purchased: false,
        totalPrice: 0
    };

    render() {

        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Auxiliary>
        );
    };


};



export default BurgerBuilder;