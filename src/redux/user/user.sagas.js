import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './user.types';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { googleSignInFailure, googleSignInSuccess } from './user.actions';

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    } catch (error) {
        yield put(googleSignInFailure(error))
    }

    // The line with userRef const definition, is the corresponding yielded version of this one below
    // const userRef = await createUserProfileDocument(userAuth);
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart)
    ]);
}