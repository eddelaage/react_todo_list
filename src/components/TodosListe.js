import React from 'react'

const TodosListe = (props) => {
    return(
        <div>
            <h2>{props.titleListe}</h2>
            <div>
                {
                    props.todos.map( (todos) => <div key={todos.id}>{todos.title} {todos.description}</div> )
                }
            </div>
        </div>
    )
}

export default TodosListe