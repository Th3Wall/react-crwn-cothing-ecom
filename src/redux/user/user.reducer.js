import userActionTypes from "./user.types";

const initialState = {
    currentUser: null,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
                // we set errors to null because if you tried to sign in without success and then you will try again successfully,
                // you will need to set errors to null
            };
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;