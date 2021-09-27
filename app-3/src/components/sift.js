import React, {useState} from 'react'


const Sift = (props) => {
    const render = props.arr
    .filter((e,i)=>{
        return e.includes(props.user)
    })
    .map((e,i) => {
        return <h2 key={i}>{e}</h2>
    })

    return (
            <div>
                {render}
            </div>
    )
}

export default Sift
