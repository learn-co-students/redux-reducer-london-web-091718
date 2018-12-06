export function managePresents(sta, action){
    let state = {...sta}
    switch(action.type){
        case "INCREASE":
            return { numberOfPresents: state.numberOfPresents +=1}
        default:
            return state
    }
}
