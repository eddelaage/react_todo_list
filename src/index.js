import React from 'react'
import  ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'

import App from './components/App'

const addTodoReducer = (state = [], action) => {
    switch(action.type) {
        case('ADD_TOTO'):
            console.log('ADD_TOTO')
            console.log('Action', action)
            action.payload.id = Date.now()
            const newTodos = [...state, action.payload]
            return newTodos
        default:
            return state
    }
}

const store = createStore(combineReducers({
    todos: addTodoReducer
}))

ReactDom.render(<App />, document.getElementById('root'))