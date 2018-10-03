import React from 'react'

class Todo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: props.data.title,
            description: props.data.description,
            isInEditMode: props.data.isInEditMode,
            id:props.data.id
        }
    }

    toggleIsInEditMode = () => {
        this.setState({isInEditMode : !this.state.isInEditMode}); ;
        this.props.updateTodo( this.state);
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value});
    }
    handleDescChange = (e) => {
        this.setState({description: e.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isInEditMode : false});
        this.props.updateTodo( this.state);
    }

    hendleDelete = (event) => {
        this.setState({title: '', description: '', id: '', isInEditMode: false})
        this.props.deleteTodo(this.state)
    }

    render() {
        // console.log('Les props qui déscendent de app :', this.props.data)
        return(
            <div>
                <button className="btn btn-danger btn-xs edit" onClick={ (event) => this.hendleDelete() }>x</button>
                <button className="btn btn-warning btn-xs edit" onClick={ (event) => this.toggleIsInEditMode() }>Modifier</button>

                {
                    this.state.isInEditMode ?
                    <span>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text" 
                                name='input_title'
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                            />
                            <input 
                                type="text" 
                                name='input_desc'
                                placeholder={this.state.description}
                                value={this.state.description}
                                onChange={this.handleDescChange}
                            />
                            <button type="submit">Valider</button>
                        </form>
                    </span>
                    :
                    <span>{this.state.title} {this.state.description}</span>

                }
            </div>

        )
    }
}

export default Todo