import cartActionTypes from "./cart.types"

export const toggleCartDropdown = () => ({
    type: cartActionTypes.TOGGLE_CART_DROPDOWN
})

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});

export const removeItemFromCart = item => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});

export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})