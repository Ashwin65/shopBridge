import { all,  put, takeLatest } from 'redux-saga/effects';
import {responeCreateItem, responseFetchItem, responseDeleteItem, responseEditItem} from '../actions/ItemActions';


export function* storeItem(action) {
    try{
       /* yield call (
            ApiServices.createItem(payload)
        ) */
        yield put(responeCreateItem(action.payload));

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

export function* removeItem(action) {
    try {
        yield put(responseDeleteItem(action.payload))
    }
    catch (err) {
        console.log(err)
    }
} 

export function* editItem(action) {
    try{
        yield put(responseEditItem(action.payload))
    }
    catch(err) {
        console.log(err)
    }
}


export default function* itemSagas() {
    yield all ([
        takeLatest('STORE_ITEM', storeItem),
        takeLatest('GET_ITEM', fetchItem),
        takeLatest('DELETE_ITEM', removeItem),
        takeLatest('EDIT_ITEM', editItem)
    ]);
    
}