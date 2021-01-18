import cartActionTypes from "./cart.types"

export const toggleCartDropdown = () => ({
    type: cartActionTypes.TOGGLE_CART_DROPDOWN
})

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});