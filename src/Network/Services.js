import {CREATE_ITEM} from './config'


export const createItem = (params) => {

    return Api(CREATE_ITEM, params, 'POST', false);
}