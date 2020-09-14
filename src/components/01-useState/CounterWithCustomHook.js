import React, { Fragment } from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} =useCounter(1)

    return (
        <Fragment>
            <h1>Counter With CustomHook: {counter}</h1>
            <hr />

            <button onClick={ () => increment(2) } className="btn">+1</button>
            <button onClick={ () => decrement(2) } className="btn">-1</button>
            <button onClick={ () => reset() } className="btn">Reset</button>
        </Fragment>
    )
}

export default CounterWithCustomHook
