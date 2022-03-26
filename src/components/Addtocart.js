import React from 'react'

const Addtocart = (props) => {
    console.log(props);

  return (
    <div>
     <h1>Add to cart</h1>
      <ul>
          {
              props.cartItem.map((ele,ind)=>{

                return <li key={ind}>{ele.productName} price {ele.productPrice}</li>
              })
          }
      </ul>

    </div>
  )
}

export default Addtocart