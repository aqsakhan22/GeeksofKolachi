import React from 'react'

const ListItems = (props) => {
    console.log(props)
  return (
    <div>
        <ul>
            Integar Items
 {
     props.intitems.map((elements) => {
       return <li>{elements}</li>
     }) 
         
     

        
     
    
 }
 </ul>

    </div>
  )
}

export default ListItems