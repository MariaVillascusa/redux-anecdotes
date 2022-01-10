const reducer = (state = '', action) => {
    switch (action.type) {
        case '@notification/set':
            return action.content
        case '@notification/reset':
            return ''
        default:
            return state
    }
}

let timeoutID = undefined;
export const setNotification = (content, segs) => {

    return async (dispatch) => {
        dispatch({
            type: '@notification/set',
            content,

        })
        if (timeoutID !== undefined) {
            clearTimeout(timeoutID)
        }
        console.log(timeoutID)
        timeoutID = setTimeout(() => {
            dispatch(resetNotification())
        }, segs * 1000)
    }
}

export const resetNotification = () => {
    return { type: '@notification/reset' }
}

export default reducer