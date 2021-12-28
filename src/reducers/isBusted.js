export default (state = false, action) => {
    if(action.type === "IS_BUSTED"){
        return action.payload
    }
    return state;
}