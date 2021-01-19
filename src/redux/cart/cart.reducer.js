import cartActionTypes from "./cart.types";
import { addItemToCartUtil } from "./cart.utils";

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
        default:
            return state
    }
}

export default cartReducer;