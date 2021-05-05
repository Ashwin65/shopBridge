
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