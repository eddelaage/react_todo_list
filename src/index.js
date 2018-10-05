import React from 'react'
import  ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'

const addTodoReducer = (state = [], action) => {
    switch(action.type) {
        case('ADD_TODO'):
            // console.log('ADD_TOTO')
            // console.log('Action', action)
            action.payload.id = Date.now()
            const newTodos = [...state, action.payload]
            return newTodos
        default:
            return state
    }
}

const store = createStore(combineReducers({
    todos: addTodoReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDom.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'))