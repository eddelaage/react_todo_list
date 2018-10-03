import React from 'react'

import FormAddTodo from './FormAddTodo'
import TodosListe from './TodosListe'

class App extends React.Component {

    state = {
        todos: []
    }

//     var array1 = [5, 12, 8, 130, 44];

// var found = array1.find(function(element) {
//   return element > 10;
// });

// console.log(found);
// expected output: 12

    deleteTodo = (deltodo, event) => {
        // console.log('Le state au debut', this.state)
        // console.log('Item a effacer : ', deltodo)
        this.state.todos.filter((todo) =>{
            if (todo.id === deltodo.id) {





                //Je stocke dans une variable 
                // const state = this.state.todos
                // console.log(state)

                // je vérifie que les deux id correspondent
                // console.log(todo.id, deltodo.id)

                //Je regarde mon state ----- C'est un tableau d'objets
                // console.log('Le state todos', this.state.todos)

                // Je regarde que j'ai bien la todo a effacer ---- C'est un objet
                // console.log('La todo a effacer', todo)

                //Avec Object.heys je renvoie un tableau contenant les noms des propriétés 
                // console.log('Tableau avec les noms des propriétés de l objet todo a éffacer', Object.keys(todo));

                //Je stocke dans la variable 'id' mon tableau avec les noms des propriétés
                // const id = Object.keys(todo)

                // console.log('Je recupere l\'index de l\'ID dans le tableau de la toto a éffacer', id.indexOf('id'));

                // je stocke dans position le premier indice pour lequel je trouve l'ID
                // const position = id.indexOf('id')

                // console.log('Je stocke dans position le premier indice pour lequel je trouve l\'ID', position)

                // get index of object with id:37
                const removeIndex = this.state.todos.map( (item) => { return item.id; }).indexOf(37);

                // remove object
                this.state.todos.splice(removeIndex);

                // console.log('Je splice', state(id.splice(position)))
                // console.log('le state après remove', this.state)
                // todo.title = deltodo.title;
                // console.log('titre de la todo a effacer', todo.title)
                // todo.description = deltodo.description;
                // console.log('Descritpion de la todo a effacer', todo.description)
                // todo.id = deltodo.id;
                // console.log('id de la todo a effacer', todo.id)
                
                // console.log('Le state a la fin', this.state)
            }
            return todo
        })
    }

    updateTodo = (updtodo) => {
        console.log('Item a modifier: ', updtodo)
        // console.log(this.state.todos)
        this.state.todos.filter((todo) => {
            if (todo.id === updtodo.id) {
                todo.title = updtodo.title;
                // console.log(todo.title)
                todo.description = updtodo.description;
                // console.log(todo.description)
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
                <TodosListe titleListe={'Liste des todos'} todos={this.state.todos}  updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

export default App