import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {responeCreateItem, responseFetchItem} from '../actions/createItemAction';


export function* storeItem(action) {
    try{
       /* yield call (
            ApiServices.createItem(payload)
        ) */
        console.log(action)
        yield put(responeCreateItem(action.payload));

        console.log("hello", action)
    }
    catch (err) {
        console.log(err)
    }
}

export function* fetchItem() {
    try {
        yield put(responseFetchItem())
    }
    catch (err) {
        console.log(err)
    }
}


export default function* itemSagas() {
    yield all ([
        takeLatest('STORE_ITEM', storeItem),
        takeLatest('GET_ITEM', fetchItem)
    ]);
    
}