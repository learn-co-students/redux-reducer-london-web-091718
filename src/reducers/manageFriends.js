export function manageFriends(statee, action){
    let state={...statee}
    switch(action.type){
        case "ADD_FRIEND":
            state.friends.push(action.friend)
            return state
        case "REMOVE_FRIEND":
            let newState = state.friends.filter(f => f.id !== action.id)
            return {friends: newState}
        default:
            return state
    }
}
