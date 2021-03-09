import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
import { connect } from "react-redux";


import { withRouter } from "react-router-dom";

import { toggleCartOpen } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/cart-item";


const CartDropdown = ({ cartItems, dispatch, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem._id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        id="button"
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartOpen());
        }}
      >
        Go to Checkout page
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));
