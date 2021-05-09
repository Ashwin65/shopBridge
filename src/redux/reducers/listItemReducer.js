

const  itemList= [ {
        name: 'A1',
        description: 'B',
        price: 20,
        stockLeft: 40
    },
    {
        name: 'A2',
        description: 'B2',
        price: 30,
        stockLeft: 50
    }]
const initialState = {}


export const listItemReducer = (state = itemList, action) => {
    if (typeof state === 'undefined') {
        return initialState;
      }

    switch (action.type) {
       
        case 'ADD_ITEM':
            return [
                ...state, action.payload
            ]

        case 'FETCH_ITEM':   
        return state;

        case 'REMOVE_ITEM':
          let  result = deleteItemFromList(state,action);
        return  result;
        case 'REPLACE_ITEM':
          let replaceList = replaceItemFromList(state,action);

            return replaceList;

        default:
            return state;
    }
}
const deleteItemFromList = (state,action) => {
    let result = state.filter(item => item.name!= action.payload.name)
    return result
}

const replaceItemFromList = (state,action) => {

    for(let i=0; i<state.length;i++)
    {
        if(state[i].name === action.payload.name)
        {
            state[i].name=action.payload.name;
            state[i].description= action.payload.description;
            state[i].price = action.payload.price;
            state[i].stockLeft= action.payload.stockLeft
        }
    }

    return state;


}