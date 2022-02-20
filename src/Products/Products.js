import axios  from 'axios';
import React,{useState,useEffect} from 'react'

const Products = () => {
    const [user,setUser]=useState([]);
    useEffect(

      
        function(){
            axios.get('https://fakestoreapi.com/products')
        .then((response) =>
         
         // console.log(response.data),
        setUser(response.data)
         
         )
        .then((error)=>console.log(error))
        }

       ,[])
  return (
    <div>Products Items

      <ul>
      {user.map((element,key)=>{
        return (
            <div><li key={key}>Product Title  : {element.title}</li>
            <img style={{width:'200px', height:"auto"}} src={element.image}/></div>
        )
        })}
      </ul>
    </div>

  )
}

export default Products
