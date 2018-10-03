import React from 'react'
import Todo from './Todo'



class TodosListe extends React.Component {
    render() {
        console.log('test props.todos = ', this.props.todos)
        return(
            <div>
            <h2>{this.props.titleListe}</h2>
            <div>
                {
                    this.props.todos.map( (todo) => <Todo key={todo.id} data={todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} /> )
                }
            </div>
            </div>
        )
    }
}


// const TodosListe = (props) => {
//     console.log('test props.todos = ', props.todos)
//     return(
//         <div>
//             <h2>{props.titleListe}</h2>
//             <div>
//                 {
//                     props.todos.map( (todo) => <Todo key={todo.id} data={todo} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} /> )
//                 }
//             </div>
//         </div>
//     )
// }


export default TodosListe