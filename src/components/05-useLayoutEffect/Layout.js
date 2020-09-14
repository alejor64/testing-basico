import React, { useLayoutEffect, useRef, useState } from 'react'
import './effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

const Layout = () => {

    const {counter, increment, decrement} = useCounter(1)
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {quote} = !!data && data[0]

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])
    
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
                
            <blockquote className="blockquote text-right">
                <p ref={pTag} className="mb-0">
                    {quote}
                </p>
            </blockquote>

            <pre>
                {
                    JSON.stringify(boxSize, null, 3)
                }
            </pre>

            <button className="btn btn-primary" onClick={() => increment()}>Siguiente Frase</button>
            {
                counter > 1 && <button className="btn btn-primary" onClick={() => decrement()}>Anterior Frase</button>
            }

        </div>
    )
}

export default Layout
