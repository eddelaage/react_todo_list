import React from 'react'

class FormAddTodo extends React.Component {
    render() {
        return(
            <div>
                <h2>{this.props.formTitle}</h2>
                <form>
                    <input type="text" placeholder="Titre de la todo" />
                    <input type="text" placeholder="Description de la todo" />
                    <button type="submit">Valider</button>
                </form>
            </div>
        )
    }
}

export default FormAddTodo