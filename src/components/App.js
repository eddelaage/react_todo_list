import React from 'react'

import FormAddTodo from './FormAddTodo'
import TodosListe from './TodosListe'

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Application TODO</h1>
                <FormAddTodo formTitle={'Ajouter une todo'} />
                <TodosListe titleListe={'Liste des todos'} />
            </div>
        )
    }
}

export default App