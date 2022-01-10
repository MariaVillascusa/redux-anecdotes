import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const createNewAnecdote = async (content) => {
    const obj = { content, votes: 0 }
    const response = await axios.post(url, obj)
    return response.data
}

const voteFor = async (anecdote) => {
    const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const response = await axios.put(url + '/' + anecdote.id, votedAnecdote)
    return response.data
}

export default { getAll, createNewAnecdote, voteFor }