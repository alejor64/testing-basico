import React, { Fragment, useEffect, useState } from 'react'
import './effects.css'
import Message from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    useEffect(() => {
        // console.log('Hey')
    }, [])

    useEffect(() => {
        // console.log('email cambia')
    }, [email])

    const handleInputChange = ({target}) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <Fragment>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            
            {
                (name === '123') && <Message />
            }
        </Fragment>
    )
}

export default SimpleForm
