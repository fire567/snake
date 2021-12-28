export const isStart = (value) => {
    return{
        type: "IS_START",
        payload: value,
    }
}

export const setCount = (value) => {
    return{
        type: "SET_COUNT",
        payload: value,
    }
}

export const setIsBusted = (value) => {
    return{
        type: "IS_BUSTED",
        payload: value,
    }
}