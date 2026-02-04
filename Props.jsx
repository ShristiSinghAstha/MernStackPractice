import React from 'react'
import Props from './props.jsx'

const props = () => {
    const car={
        name:"WRV",
        model:2019,
        color:"black"
    }
    const Tech=["JavaScript","Node","HTML","NextJS"]
  return (
    <div>
      <h1>{car.name} {car.model} {car.color}</h1>
      <div>
        Tech.map((items,index)=>{
            <ul key={index}>items</ul>
        })
      </div>
    </div>
  )
}

export default props
