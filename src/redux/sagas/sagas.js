import { all, fork } from "redux-saga/effects";
import createItemSagas from './createItemSagas';

export default function* rootSaga() {
    yield all([
        fork(createItemSagas)
    ])
}