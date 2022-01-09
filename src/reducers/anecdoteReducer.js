import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case '@anecdotes/vote':
      const id = action.id
      const anecdoteToVote = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote)

    case '@anecdotes/create':
      return [...state,
      action.anecdote,
      ]
    case '@anecdotes/init':
      return action.data

    default:
      return state
  }
} 

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: '@anecdotes/init',
      data: anecdotes
    })
  }
}

export const voteAnecdote = (id) => {
  return {
    type: '@anecdotes/vote',
    id
  }
}

export const createAnecdote = (content) => {
  return {
    type: '@anecdotes/create',
    anecdote: content,
  }
}

export default reducer