import React from 'react'
import Todo from './Todo'

const TodosListe = (props) => {
    console.log('test props.todos = ', props.todos)
    return(
        <div>
            <h2>{props.titleListe}</h2>
            <div>
                {
                    props.todos.map( (todo) => <Todo key={todo.id} data={todo} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} /> )
                }
            </div>
        </div>
    )
}


export default TodosListe