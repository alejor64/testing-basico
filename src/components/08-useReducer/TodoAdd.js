import React, { Fragment } from 'react'
import { useForm } from '../../hooks/useForm'

const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!description.trim()){
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo)
        reset()
    }

    return (
        <Fragment>
            <h4>Agregar todo</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={description}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block mt-1"
                >
                    Agregar
                </button>
            </form>
        </Fragment>
    )
}

export default TodoAdd
