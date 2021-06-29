import React from 'react';
// Redux & reselect
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
// Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
// Styles
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div> 
        {
            // mapping each item to be displayed on checkout page. 
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className="total"><span>Total: ${totalPrice}</span></div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 07/21 - CVV: 323
        </div>
        <StripeCheckoutButton price={totalPrice} />
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);