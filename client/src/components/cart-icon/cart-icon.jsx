import React from 'react';
import { ReactComponent as TrolleyIcon } from '../../assets/cart.svg';
import './cart-icon.scss';

const CartIcon = () => {
    return ( 
        <div className='cart-icon'>

            <TrolleyIcon className='trolley-icon'/>
            <span className='items-count'>0</span>

        </div>
     );
}
 
export default CartIcon;