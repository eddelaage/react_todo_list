import React from 'react'
import { connect } from 'react-redux'

import FormAddTodo from './FormAddTodo'
import TodosListe from './TodosListe'

class App extends React.Component {

    state = {
        todos: []
    }

    deleteTodo = (deltodo, event) => {
        this.state.todos.filter((todo) =>{
            if (todo.id === deltodo.id) {
                // get index of object with id:37
                const removeIndex = this.state.todos.map( (item) => { return item.id; }).indexOf(deltodo.id);
                // console.log(removeIndex)
                // remove object
                this.state.todos.splice(removeIndex, 1);
                this.setState( Object.assign({}, this.state ))
            }
            return todo
        })
    }

    updateTodo = (updtodo) => {
        this.state.todos.filter((todo) => {
            if (todo.id === updtodo.id) {
                todo.title = updtodo.title;
                todo.description = updtodo.description;
                todo.isInEditMode = updtodo.isInEditMode;
            }
            return todo;
        });
    }

    render() {
        // console.log(this.state)
        return(
            <div>
                <h1>Application TODO</h1>
                <FormAddTodo formTitle={'Ajouter une todo'} addTodo={this.props.addTodo} />
                <TodosListe titleListe={'Liste des todos'} todos={this.props.todos}  updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
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

const mapStateToProps = (state) => {
    return{
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTodo: (todo) => {
            dispatch(addTodoActionCreator(todo))
        }
    }
}
// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App)