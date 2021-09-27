import React from 'react'

const Todo = (props) => {
    const render = props.arr.map((e,i) => <h3 key={i}>{e}</h3>)
    return (
        <div>
            {render}
        </div>
    )
}

export default Todo
