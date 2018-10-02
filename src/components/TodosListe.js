import React from 'react'

import Todo from './Todo'



// class TodosListe extends React.Component {

//     state = {
//         isInEditMode: false
//     }

//     toogleIsInEditMode = () => {
//         this.setState({ isInEditMode: true })
//     }
    
//     render() {
//         return(
//             <div>
//                 <h2>{this.props.titleListe}</h2>
//                 <div>
//                     {
//                         this.state.isInEditMode ?
//                         <span>
//                             <input 
//                                 type="text"
//                                 value={this.props.todos.title}
//                             />
//                             <input 
//                                 type="text"
//                                 value={this.props.todos.description}
//                             />
//                         </span>
//                         :
//                         <span>
//                             {this.props.todos.map( (todos) => 
//                             <div key={todos.id}>
//                             <button className="btn btn-danger btn-xs edit">x</button>
//                             <button 
//                                 className="btn btn-warning btn-xs edit" 
//                                 onClick={ (event) => this.toogleIsInEditMode() }>
//                                 Modifier
//                             </button>
//                             {todos.title} {todos.description}</div> )}
//                         </span>
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

const TodosListe = (props) => {
    return(
        <div>
            <h2>{props.titleListe}</h2>
            <div>
                {
                    props.todos.map( (todos) => <Todo key={todos.id} data={todos} editTitleTodo={props.editTitleTodo} /> )
                }
            </div>
        </div>
    )
}


export default TodosListe