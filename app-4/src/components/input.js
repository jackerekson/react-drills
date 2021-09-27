import React, {useState} from 'react'

const Alert = (props) => {
    const bam = () => {
        alert (`User: ${props.user} Password: ${props.password}`)
    }
    return (
        <div>
           <button onClick={()=>bam()}>Login</button> 
        </div>
    )
}

export default Alert
