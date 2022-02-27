import React from 'react'
import { useState } from 'react';

const TodList = () => {
  const [list,setList]=useState(
    [

    ]
  )
  const [value,setvalue]=useState("");
    const addItem=()=>{
         list.push(value);
         console.log(list);
         setvalue("");

    }
    const inputValue =(inputvalue)=>{
      setvalue(inputvalue);

    }

    const deletevalue =(index)=>{
      console.log(index)
      const updateditems=list.filter((value,indexvalue)=>{
          return index != indexvalue
      })
      console.log(updateditems)
       setList(updateditems)

    }
  return (
    <div>

        <h1>TodList</h1>
               <div>
                   <input type="text"  onChange={(e)=>inputValue(e.target.value)}  value={value}  />
                   <button onClick={addItem}>Add Items</button>
                   <p>You enter value :{value}</p>
               </div>
                  <div>
                    <ul>
                      {
                         list.map((element,value)=>{
                          
                           return <div>
                             <li key={value}>{element}  <button onClick={()=>deletevalue(value)}>delete</button></li> 
                           </div>
                         })
                      }
                    </ul>
                  </div>
 
     </div>
  )
}

export default TodList