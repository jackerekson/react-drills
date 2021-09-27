import React, { useState } from 'react'
import Sift from './sift'

const List = (props) => {
    const [arr] = useState(['brown','chicken','brown','cow'])
    
    return(
        <div>
            <Sift arr={arr} user={props.user}/>
        </div>
    )
    
}

export default List