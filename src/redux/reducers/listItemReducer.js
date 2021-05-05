import { useState } from "react";

const  itemList= [ {
        Name: 'A1',
        Description: 'B',
        Price: 20
    },
    {
        Name: 'A2',
        Description: 'B2',
        Price: 30
    }]
const initialState = {}


export const listItemReducer = (state = itemList, action) => {
    if (typeof state === 'undefined') {
        return initialState;
      }

      console.log('hey16', state)
      console.log('hey17' , action.payload)
    switch (action.type) {
       
        case 'ADD_ITEM':
            return [
                ...state, action.payload
            ]

        case 'FETCH_ITEM':   
        return state;

        case 'REMOVE_ITEM':
          let  result = deleteItemFromList(state,action);
        return  result

        default:
            return state;
    }
}


const deleteItemFromList = (state,action) => {
     console.log(state, action.payload)
    let result = state.filter(item => item.Name!= action.payload.Name)
    console.log("result",result)
    return result
}