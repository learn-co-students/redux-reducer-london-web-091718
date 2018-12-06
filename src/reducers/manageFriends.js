export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [
          ...state.friends,
          action.friend
        ]
      };
    case "REMOVE_FRIEND":
      const filteredFriends = state.friends.filter(friend => friend.id !== action.id);

      return {
        ...state,
        friends: [...filteredFriends]
      };
    default:
      return state;
  }
}
