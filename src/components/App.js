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
        // console.log(this.state.todos.id)
    }

    editTitleTodo = (title, description) => {
        console.log('Todo modifié vue par le parent APP :', title, description)
        const oldTodos = this.state.todos
        console.log('oldTodos :', oldTodos)
        // if (data.id === oldTodos.id) {
        //     const newTodos = [...oldTodos, title, description]
        //     this.setState({ todos: newTodos })
        // }
        
    }

    render() {
        return(
            <div>
                <h1>Application TODO</h1>
                <FormAddTodo formTitle={'Ajouter une todo'} addTodo={this.addTodo} />
                <TodosListe titleListe={'Liste des todos'} todos={this.state.todos} editTitleTodo={this.editTitleTodo}/>
            </div>
        )
    }
}

export default App