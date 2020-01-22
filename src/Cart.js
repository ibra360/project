import React, { Component } from 'react';
import Axios from 'axios';
import StripeCheckout from "react-stripe-checkout";



class Cart extends Component {


    state = {
        product: {
            name: "Uderwear",
            price: 300
        }
    }

    onToken = token => {
        var product = this.state.product;
        Axios.post("/payment/card", { token, product });

    };


    render() {
        return (

            <div>
                <StripeCheckout
                    stripeKey="pk_test_hwkLxt8LBes26ISO9RAbj9VH00CAjZe5Mq"
                    billingAddress
                    shippingAddress
                    amount={this.state.amount}
                    token={this.onToken} />
            </div>
        )
    }
}
export default Cart;

// sk_test_bDRbZ6wDvJuE6lNRK7P6lE7e00j5exhqkb