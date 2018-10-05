import React from 'react'

class Todo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            // title: props.data.title,
            // description: props.data.description,
            isInEditMode: false,
            // id:props.data.id
        }
    }

    toggleIsInEditMode = (todo) => {
        this.setState({isInEditMode : !this.state.isInEditMode}); ;
        // this.props.updateTodo( this.state);
    }

    handleTitleChange = (event, todo) => {
        event.preventDefault();
        // this.setState({title: e.target.value});
        todo.title = event.target.value
        this.props.updateTodo(todo)
    }
    handleDescChange = (event, todo) => {
        event.preventDefault();
        // this.setState({description: e.target.value});
        todo.description = event.target.value
        this.props.updateTodo(todo)
    }
    handleSubmit = (event, todo) => {
        event.preventDefault();
        this.setState({isInEditMode : false});
        this.props.updateTodo(todo);
    }

    // hendleDelete = (event) => {
    //     this.setState({title: '', description: '', id: '', isInEditMode: false})
    //     this.props.deleteTodo(this.state)
    // }

    render() {
        const todo = this.props
        // console.log('Les props qui déscendent de app :', this.props.data)
        return(
            <div hey={todo}>
                {/* <button className="btn btn-danger btn-xs edit" onClick={ (event) => this.hendleDelete() }>x</button> */}
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
                            <button type="submit" onClick={ (event) => this.toggleIsInEditMode() }>Valider</button>
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