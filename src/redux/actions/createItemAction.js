
export const createItem = (data) => (
      console.log(data),
    {
  
    type: 'STORE_ITEM',
    payload: data
})

export const responeCreateItem = (data) => (
    console.log(data),
    {
    type: 'ADD_ITEM',
    payload: data
})

export const fetchItem = () => ({
    type: 'GET_ITEM',
})

export const responseFetchItem = () => ({
    type : 'FETCH_ITEM'
})


export const deleteItem = (item) => ({
    type: 'DELETE_ITEM',
    payload: item
})

export const responseDeleteItem = (item) => ({
    type: 'REMOVE_ITEM',
    payload:item
})