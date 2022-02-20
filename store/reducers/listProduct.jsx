const initState = [];

const listProduct = (state = initState, action) =>{
    if (action.type === 'set-data-products') {
        return action.payload
    }

    return state
}

export default listProduct