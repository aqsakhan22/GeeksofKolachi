import React,{useState} from 'react'
import Addtocart from './Addtocart'

const Allproducts = () => {
    const [products,setProduct]=useState(

        [
            {productid:1,productName:"Shirt",productPrice:500},
            {productid:2,productName:"Pents",productPrice:400},
            {productid:3,productName:"Watch",productPrice:1000}
        ]
    )
    const [addtoCart,setCart]=useState(
        []
    )
  const AddCart=(element)=>{
      console.log(element);
        const addProducts=[...addtoCart];
           addProducts.push(element);
           setCart(addProducts);
        console.log(addtoCart);


  }
  return (
    <div>
        
       <h1>Allproducts</h1>
       <ul>
           {
               products.map((productValue,productIndex)=>{
                    return <div key={productIndex} style={{backgroundColor:"gold" , width:"300px",margin:"0 auto",listStyle:"none",padding:"20px"}}>
                            <li>{productValue.productName}</li>
                            <li>price :{productValue.productPrice} </li>
                            <li><button onClick={()=>{AddCart({productName:productValue.productName,productPrice:productValue.productPrice})}}>Addtocart</button></li>
                            <hr/>
                            <br/>
                    </div>

               })
           }
       </ul>

      <ul>
          {
              addtoCart.map((ele,ind)=>{
                  return <li key={ind}>{ele.productName}  price : {ele.productPrice}</li>
              })
          }
      </ul>
          <Addtocart cartItem={addtoCart}/>
        
        
        </div>
  )
}

export default Allproducts