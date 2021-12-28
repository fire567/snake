import { combineReducers } from "redux";
import isStartedReducer from "./isStartedReducer.js"
import count from "./count.js";
import isBusted from "./isBusted.js";

export default combineReducers({
    isStartedReducer: isStartedReducer,
    count: count,
    isBusted: isBusted,
})