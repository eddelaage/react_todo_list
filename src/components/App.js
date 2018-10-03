import React from 'react'

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
                console.log(removeIndex)
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

    addTodo = (todo) => {
        const oldTodos = this.state.todos
        const newTodos = [...oldTodos, todo]
        this.setState({ todos: newTodos })   
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <h1>Application TODO</h1>
                <FormAddTodo formTitle={'Ajouter une todo'} addTodo={this.addTodo} />
                <TodosListe titleListe={'Liste des todos'} todos={this.state.todos}  updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

export default App