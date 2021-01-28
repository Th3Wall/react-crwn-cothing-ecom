import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';

export function* rootSaga() {
    yield all([
        call(fetchCollectionsStart)
    ])
}