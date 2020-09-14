import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })

    const {x, y} = coords

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = {
                x: e.x,
                y: e.y
            }
            setCoords(coords)
            // console.log(coords)
        }
    
        // console.log('componente montado')
        window.addEventListener('mousemove', mouseMove)

        return () => {
            console.log('componente desmontado')
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>Eres Genial</h3>
            <p>
                X: {x} Y: {y}
            </p>
        </div>
    )
}

export default Message
