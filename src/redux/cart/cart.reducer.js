import cartActionTypes from "./cart.types";

const initialState = {
    hidden: true
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state
    }
}

export default cartReducer;