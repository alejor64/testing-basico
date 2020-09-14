import React from 'react'

const Small = React.memo (({value}) => {
    console.log('Hola')
    return (
        <small>{value}</small>
    )
})

export default Small
