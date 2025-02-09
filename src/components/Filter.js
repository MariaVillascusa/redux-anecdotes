import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAnecdotesBy } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(filterAnecdotesBy(event.target.value))
    }

    const style = {
        marginBottom: 10,
        marginTop: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter