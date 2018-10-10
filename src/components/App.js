import React from 'react'
import { connect } from 'react-redux'

import FormAddTodo from './FormAddTodo'
import TodosListe from './TodosListe'

class App extends React.Component {

    render() {
        return(
            <div>
                <h1>Application TODO</h1>
                <FormAddTodo formTitle={'Ajouter une todo'} addTodo={this.props.addTodo} />
                <TodosListe titleListe={'Liste des todos'} todos={this.props.todos}  updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} />
            </div>
        )
    }
}

const addTodoActionCreator = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

const updateTodoActionCreator = (todo) => {
    return {
        type: 'UPDATE_TODO',
        payload: todo
    }
}

const deleteTodoActionCreator = (todo) => {
    return {
        type: 'DELETE_TODO',
        payload: todo
    }
}

const mapStateToProps = (state) => {
    return{
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTodo: (todo) => {
            dispatch(addTodoActionCreator(todo))
        },
        updateTodo: (todo) => {
            dispatch(updateTodoActionCreator(todo))
        },
        deleteTodo: (todo) => {
            dispatch(deleteTodoActionCreator(todo))
        }
     }
}
// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App)