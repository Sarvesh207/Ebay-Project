import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import './carousal.css'

import {productData,responsive} from './Data'
import Buttons from "./button/Buttons";

export default function carousel() {
  return (
    <div>
        <h1>Hii sarvesh</h1>
      <Buttons/>
      <Carousel transitionDuration={500} autoPlaySpeed={100} responsive={responsive}>
        {
        
           productData.map((item)=>{
              return <Product
              key={item.id}
              name={item.name}
              url={item.imageurl}
              price={item.price}/>
            })

        }
      </Carousel>
    </div>
  )
}
