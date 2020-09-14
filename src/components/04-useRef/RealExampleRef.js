import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
import './effects.css'

const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <h1>Real example</h1>
            <hr/>

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-5"
                onClick={handleClick}
            >
                Show/Hide
            </button>
        </div>
    )
}

export default RealExampleRef
