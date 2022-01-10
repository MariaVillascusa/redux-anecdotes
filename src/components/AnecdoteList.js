import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, resetNotification } from '../reducers/notificationReducer'

export default function AnecdoteList() {

    const dispatch = useDispatch()
    let filter = useSelector(state => {
        return state.filter
    })

    let anecdotes = useSelector(state => state.anecdotes).sort((a, b) => b.votes - a.votes)

    anecdotes = filter.length === 0 ? anecdotes
        : anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLocaleLowerCase()))

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        setNotification(anecdote.content)
    }

    const setNotification = (content) => {
        dispatch(voteNotification(content))
        setTimeout(() => {
            dispatch(resetNotification())
        }, 5000)
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
            <hr />
        </div>
    )
}