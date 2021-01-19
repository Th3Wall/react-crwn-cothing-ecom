import cartActionTypes from "./cart.types";
import { addItemToCartUtil, removeItemFromCartUtil } from "./cart.utils";

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCartUtil(state.cartItems, action.payload)
            };
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCartUtil(state.cartItems, action.payload)
            };
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        default:
            return state
    }
}

export default cartReducer;