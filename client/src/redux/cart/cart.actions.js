import { ADD_ITEM, CLEAR_CART, CLEAR_ITEM_FROM_CART, REMOVE_ITEM, TOGGLE_CART_OPEN } from "./cart.action.types";

export const toggleCartOpen = () => ({
    type: TOGGLE_CART_OPEN
});

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
})
 
export const clearCart = () =>({
    type: CLEAR_CART
})