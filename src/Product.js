import React from 'react'
import Buttons from './Buttons'

export default function Product(props) {
  return (
    
   
    <div key={props.id} className="card">
          <img className="product--image" src={props.url} alt="shoeImg"/>
          <h2>{props.name}</h2>
          <p className="price">{props.price}</p>
          {/* <p>Some decription about product...</p>
          <p>
            <button>Add to cart</button>
          </p> */}

    </div>
    
  )
}
