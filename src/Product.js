import React from 'react';
import ItemDescription from "./ItemDescription";

// props are passed as parameters of function or class {this.props} based components
// destructuring - pulling apart an object to get access to individual properties that can be passed

function Product ({name, description, price}){

    return (
        <div>
            <ItemDescription name={name} description={description}/>
            <h3> ${price}</h3>
        </div>
    )
}

export default Product
