import userActionTypes from "./user.types";

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

// We can pass email and password in with two simple variables or as an object like this example below
export const emailSignInStart = emailAndPassword => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const signInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

// We pass in the user, the email and additional data as an object that we will call userCredentials
export const signUpStart = userCredentials => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = ({ user, additionalData }) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
})

export const signUpFailure = error => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
})