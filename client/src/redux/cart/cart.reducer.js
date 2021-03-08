import { ADD_ITEM, CLEAR_CART, CLEAR_ITEM_FROM_CART, REMOVE_ITEM, TOGGLE_CART_OPEN } from "./cart.action.types"
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    cartIsOpen: false,
    cartItems : []
}

const cartReducer = (state=INITIAL_STATE, action) =>{
    
    switch(action.type){
        case TOGGLE_CART_OPEN:
            return { ...state, cartIsOpen: !state.cartIsOpen};
            
        case ADD_ITEM:
            return { ...state, cartItems: addItemToCart(state.cartItems, action.payload)} 

        case REMOVE_ITEM:
            return {...state, cartItems: removeItemFromCart(state.cartItems, action.payload)}

        case CLEAR_ITEM_FROM_CART:
            return { 
                ...state, 
                cartItems: state.cartItems.filter(
                    cartItem=> cartItem._id !== action.payload._id
                    )
            };

        case CLEAR_CART:
            return { ...state, cartItems: []}

        default:
            return state;

    }

}

export default cartReducer;