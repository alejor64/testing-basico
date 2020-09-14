import React from 'react'

const ShowIncrement = ({increment}) => {
    console.log('Increment')
    return (
        <button 
            className="btn btn-primary" 
            onClick={()=> {increment(5)}}
        >
            Increment
        </button>
    )
}

export default ShowIncrement
