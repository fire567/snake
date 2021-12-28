export default (state = 0, action) => {
    if(action.type === "SET_COUNT"){
        return action.payload
    }
    return state;
}