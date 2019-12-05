import React from 'react';

const SmurfList = ({item, DeleteSmurf}) => {
    return(
        <div>
            <h3>{item.name}</h3>
            <p>{item.age}</p>
            <p>{item.height}</p>
            <button onClick={()=>DeleteSmurf(item.id)}>Delete</button>
        </div>
    )
}
export default SmurfList