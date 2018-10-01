import React from 'react'

import FormAddTodo from './FormAddTodo'
import TodosListe from './TodosListe'

class App extends React.Component {

    state = {
        todos: []
    }

    addTodo = (todo) => {
        const oldTodos = this.state.todos
        todo.id = Date.now()
        const newTodos = [...oldTodos, todo]
        this.setState({ todos: newTodos })
    }

    render() {
        return(
            <div>
                <h1>Application TODO</h1>
                <FormAddTodo formTitle={'Ajouter une todo'} addTodo={this.addTodo} />
                <TodosListe titleListe={'Liste des todos'} />
            </div>
        )
    }
}

export default App