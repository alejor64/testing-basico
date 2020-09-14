import React, { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement'
import './effects.css'

const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback((num) => {
        setCounter(c => c + num)
    }, [setCounter])

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallBackHook
