
const reducer = (state = '', action) => {

    switch (action.type) {
        case '@filter/anecdotes':
            return action.filter

        default:
            return state
    }
}

export const filterAnecdotesBy = (filter) => {
    return {
        type: '@filter/anecdotes',
        filter
    }
}

export default reducer