import React from 'react'

class Todo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isInEditMode: false,
        }
    }

    toggleIsInEditMode = (todo) => {
        this.setState({isInEditMode : !this.state.isInEditMode});
    }

    handleTitleChange = (event, todo) => {
        event.preventDefault();
        todo.title = event.target.value
        this.props.updateTodo(todo)
    }
    handleDescChange = (event, todo) => {
        event.preventDefault();
        todo.description = event.target.value
        this.props.updateTodo(todo)
    }
    handleSubmit = (event, todo) => {
        event.preventDefault();
        this.setState({isInEditMode : false});
        this.props.updateTodo(todo);
    }

    hendleDelete = (event, todo) => {
        this.setState({title: '', description: '', id: '', isInEditMode: false})
        this.props.deleteTodo(todo)
    }

    render() {
        const todo = this.props
        return(
            <div hey={todo}>
                <button className="btn btn-danger btn-xs edit" onClick={ (event) => this.hendleDelete(event, todo) }>x</button>
                <button className="btn btn-warning btn-xs edit" onClick={ (event) => this.toggleIsInEditMode() }>Modifier</button>

                {
                    this.state.isInEditMode ?
                    <span>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text" 
                                name='input_title'
                                value={this.props.data.title}
                                onChange={event => this.handleTitleChange(event, this.props.data)}
                            />
                            <input 
                                type="text" 
                                name='input_desc'
                                // placeholder={this.state.description}
                                value={this.props.data.description}
                                onChange={event => this.handleDescChange(event, this.props.data)}
                            />
                        </form>
                    </span>
                    :
                    <span>{this.props.data.title} {this.props.data.description}</span>

                }
            </div>

        )
    }
}

export default Todo