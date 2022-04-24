import React from "react";

// component that utilises the destructured properties - name & description
function ItemDescription({name, description}){
    return <div>
        <p> {name} </p>
        <p> {description}</p>
    </div>

}

export default ItemDescription