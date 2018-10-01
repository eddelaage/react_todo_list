import React from 'react'

class FormAddTodo extends React.Component {

    state = {
        title: '',
        description: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({ title: '', description: '' })
    }

    render() {
        return(
            <div>
                <h2>{this.props.formTitle}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Titre de la todo"
                        value={this.state.title}
                        onChange={ (event) => this.setState({ title: event.target.value }) } 
                    />
                    <input 
                        type="text" 
                        placeholder="Description de la todo"
                        value={this.state.description}
                        onChange={ (event) => this.setState({ description: event.target.value }) } 
                    />
                    <button type="submit">Valider</button>
                </form>
            </div>
        )
    }
}

export default FormAddTodo