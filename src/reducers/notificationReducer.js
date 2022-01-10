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

export const setNotification = (content, segs) => {
    return async (dispatch) => {
        dispatch({
            type: '@notification/set',
            content
        })
        setTimeout(() => {
            dispatch(resetNotification())
        }, segs * 1000)
    }
}

export const resetNotification = () => {
    return { type: '@notification/reset' }
}

export default reducer