import React from 'react'
import Todo from './Todo'


const TodosListe = (props) => {
    return(
        <div>
            <h2>{props.titleListe}</h2>
            <div>
                {
                    props.todos.map( (todo) => <Todo key={todo.id} data={todo} updateTodo={props.updateTodo}  /> )
                }
            </div>
        </div>
    )
}


export default TodosListe