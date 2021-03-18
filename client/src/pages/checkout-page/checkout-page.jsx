import React from "react";
import "./checkout-page.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import whatsapp from '../../assets/whatsapp.svg'
import WhatsAppButton from "../../components/whatsapp-button/whatsapp-button";

const CheckoutPage = ({ cartItems, total }) => {
    
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="head">
          <span>Product</span>
        </div>
        <div className="head">
          <span>Description</span>
        </div>
        <div className="head">
          <span>Quantity</span>
        </div>
        <div className="head">
          <span>Price</span>
        </div>
        <div className="head">Remove</div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>Total: KES {total}</span>
      </div>

      <WhatsAppButton>Order Via Whatsapp</WhatsAppButton>
    </div>
  );
};

const mapStateToProps = (state)=> ({
  cartItems: state.cart.cartItems,
  total: state.cart.cartItems.reduce(
      (accumulatedQuantity, cartItem)=>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
  )
});

export default connect(mapStateToProps)(CheckoutPage);