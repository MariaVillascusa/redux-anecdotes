const reducer = (state = '', action) => {
    switch (action.type) {
        case '@notification/create':
            return 'You created: ' + action.content
        case '@notification/vote':
            return 'You voted: ' + action.content
        case '@notification/reset':
            return ''
        default:
            return state
    }
}

export const voteNotification = (content) => {
    return {
        type: '@notification/vote',
        content
    }
}

export const createNotification = (content) => {
    return {
        type: '@notification/create',
        content
    }
}

export const resetNotification = () => {
    return { type: '@notification/reset' }
}


export default reducer