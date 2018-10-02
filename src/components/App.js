import React from 'react'

import FormAddTodo from './FormAddTodo'
import TodosListe from './TodosListe'

class App extends React.Component {

    state = {
        todos: [],
        current_todo: {}
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

    addTodo = (todo) => {
        const oldTodos = this.state.todos
        // todo.id = Date.now()
        const newTodos = [...oldTodos, todo]
        this.setState({ todos: newTodos })
        // console.log(this.state.todos.id)
    }

    render() {
        return(
            <div>
                <h1>Application TODO</h1>
                <FormAddTodo formTitle={'Ajouter une todo'} addTodo={this.addTodo} />
                <TodosListe titleListe={'Liste des todos'} todos={this.state.todos}  updateTodo={this.updateTodo} />
            </div>
        )
    }
}

export default App