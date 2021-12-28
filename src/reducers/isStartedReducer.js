export default (state = false, action) => {
    if(action.type === "IS_START"){
        return action.payload
    }
    return state;
}