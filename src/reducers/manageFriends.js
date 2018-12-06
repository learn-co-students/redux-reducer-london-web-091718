export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return { 
                friends: [
                    ...state.friends,
                    {
                        name: action.friend.name,
                        hometown: action.friend.hometown,
                        id: action.friend.id
                    }
                ]
             }
        case "REMOVE_FRIEND":
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        return (
            {...state,
                friends: [
                ...state.friends.slice(0, removalIndex),
                ...state.friends.slice(removalIndex + 1)
                ]
            }
        )
        default:
            return state
    }
}
