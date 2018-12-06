
export const manageFriends = (state, action) => {
    switch (action.type) {
    case 'ADD_FRIEND':
        return {
            friends: [ 
                ...state.friends,
                { 
                name: action.friend.name,
                hometown: action.friend.hometown,
                id: action.friend.id
                }] 
            }
    case 'REMOVE_FRIEND':
            const copyOfFriends = state.friends.slice()
            const foundFriend = copyOfFriends.find(friend => friend.id === 101)
            const foundFriendIndex = copyOfFriends.indexOf(foundFriend)
            copyOfFriends.splice(foundFriendIndex, foundFriendIndex)
        return {
            friends: copyOfFriends   
            }
    default:
            return state
        }
}


// Error: Expected { 
//     friends: [{ 
//         name: 'Avi', 
//         hometown: 'NYC', 
//         id: 100 
//     }, 
//     { 
//         name: 'Joe', 
//         hometown: 'Boston', 
//         id: 101 
//     }, 
//     { 
//         name: 'Steven', 
//         hometown: 'Philadephia', 
//         id: 102 
//     }]
//     } to equal {

//     friends: [{ 
//         name: 'Avi', 
//         hometown: 'NYC', 
//         id: 100 
//     }, { 
//         name: 'Steven', 
//         hometown: 'Philadephia', 
//         id: 102 
//     }] }