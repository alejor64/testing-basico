import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

    const {setUser} = useContext(UserContext)

    const object = {
        id: 123,
        name: 'Alejandro'
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => setUser(object)}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
