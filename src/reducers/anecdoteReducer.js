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

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    await anecdoteService.voteFor(anecdote)
    dispatch({
      type: '@anecdotes/vote',
      id: anecdote.id
    })
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNewAnecdote(content)
    dispatch({
      type: '@anecdotes/create',
      anecdote: newAnecdote
    })
  }
}

export default reducer