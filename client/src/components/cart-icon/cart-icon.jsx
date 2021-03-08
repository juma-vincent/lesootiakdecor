import React from 'react';
import { ReactComponent as TrolleyIcon } from '../../assets/cart.svg';
import './cart-icon.scss';
import { connect } from 'react-redux';
import { toggleCartOpen } from '../../redux/cart/cart.actions';


const CartIcon = ({itemsCount, toggleCartOpen}) => {
    return ( 
        <div className='cart-icon' onClick={()=>toggleCartOpen()}>

            <TrolleyIcon className='trolley-icon'  />
            <span className='items-count'>{itemsCount} </span>

        </div>
     );
}

const mapDispatchToProps = dispatch =>({
toggleCartOpen: ()=> dispatch(toggleCartOpen())

})

const mapStateToProps = (state) =>({
 itemsCount: state.cart.cartItems.length
})
 
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);