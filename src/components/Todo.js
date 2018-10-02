import React from 'react'

class Todo extends React.Component{

    state = {
        title: '',
        description: '',
        isInEditMode: false
    }

    toggleIsInEditMode = () => {
        this.setState({ isInEditMode: !this.state.isInEditMode })
    }

    editTitleTodo = (event) => {
        // event.preventDefault()
        this.props.editTitleTodo(this.state)
    }

    render() {
        console.log('Les props qui déscendent de app :', this.props.data)
        return(
            <div>
                <button className="btn btn-danger btn-xs edit">x</button>
                <button className="btn btn-warning btn-xs edit" onClick={ event => this.toggleIsInEditMode() }>Modifier</button>

                {
                    this.state.isInEditMode ?
                    <span>
                        <input 
                            type="text" 
                            value={this.props.data.title}
                            onChange={ (event) => this.editTitleTodo(this.setState({ title: event.target.value })) }
                        />
                        <input 
                            type="text" 
                            value={this.props.data.description}
                            onChange={ event => this.editTitleTodo(event, this.props.data) }
                        />
                    </span>
                    :
                    <span>{this.props.data.title} {this.props.data.description}</span>

                }
            </div>

        )
    }
}

export default Todo