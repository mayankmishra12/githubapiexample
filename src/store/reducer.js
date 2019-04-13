import constant from '../constatnt'
const initialState ={
    age : 21,
    searched_users: []
}

const reducer = (state = initialState, action) => {
    const newState = {...state}
    if(action.type === 'SEARCH_USERS'){
        newState.age++
    }
    if(action.type === 'AGE_DOWN'){
        newState.age--;
    }

    // console.log(newState)
    return newState
}

export default reducer;