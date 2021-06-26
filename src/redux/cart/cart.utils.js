
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
} // end of const addItemToCart