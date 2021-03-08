
export const addItemToCart = (cartItems, cartItemToAdd) =>{
  console.log(cartItems)
    const existingCartItem = cartItems.find(cartItem => cartItem._id === cartItemToAdd._id);

    if(existingCartItem){
       return cartItems.map(cartItem=> cartItem._id === cartItemToAdd._id?
            { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem)

    }else{
       return [...cartItems, {...cartItemToAdd, quantity: 1}];
    }
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(cartItem=> cartItem._id === itemToRemove._id);

  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem=> cartItem._id !== itemToRemove._id)
  }

  return cartItems.map(cartItem=> cartItem._id === itemToRemove._id?
        { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
  ); 
  
}