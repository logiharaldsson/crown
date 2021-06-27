
// Takes all existing cartItems and compares to the item to be added
// If item already exist quantity is increased by 1. 
// If item does not exist, add/append to array and set initial quantity to 1

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);
    
    // If item already exists, +1 quantity
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity +1 }
                : cartItem
            )
    }
    // If item does not exists, add to cart
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}; // end of const addItemToCart

// comparing if the item in question is in cart. Either decreases quantity or 
// removes from cart if quantity is 1
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    // If the quantity is 1, remove item from cart 
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    
    return cartItems.map(
        cartItem => 
        cartItem.id === cartItemToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1}
        :  cartItem

    );
};