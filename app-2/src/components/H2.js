import React, { useState } from 'react'

const H2Input = () => {
    const [arr] = useState(['brown','chicken','brown','cow'])
    const allArr = arr.map((e, i) => <h2 key={i}>{e}</h2>)

    return(
        <div>
            {allArr}
        </div>
    )
    
}

export default H2Input