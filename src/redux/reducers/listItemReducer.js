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
      console.log("hey18", state.push(action.payload))
    switch (action.type) {
       
        case 'ADD_ITEM':
            return {
                ...state, ...action.payload
            }

        case 'FETCH_ITEM':   
        return state;

        default:
            return state;
    }
}