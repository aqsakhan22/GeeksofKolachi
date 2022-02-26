import React, { useState } from 'react'
import "./colors.css"

const Colortask = () => {
    const [colorlist,setColorlist]=useState(
        ["red","Green","Blue","purple","black"]
    )
    const[colorcode,setColorcode]=useState(["red","green","blue"])
    
  return (
    <div className='colorul'>

        <h1>Color task using index</h1>
        <ul>
            {
                colorlist.map((element,index)=>{
                    return <li style={{backgroundColor:colorcode[index % colorcode.length]}}>{element} {index}</li>

                })
            }
        </ul>
        <h1>Color task using color name</h1>
        <ul>
            {
                colorlist.map((element,index)=>{
                    return <li style={{backgroundColor:element}}>this is {element} color  </li>

                })
            }
        </ul>
    </div>
  )
}

export default Colortask